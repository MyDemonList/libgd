class Structure {
    constructor(client, data, fills = Structure.FILLS, seperator = ":") {
        if (typeof data == "string")
            data = Structure.parseRaw(data, seperator);

        // parse raw data in the constructor
        for (let key in data) {
            if (fills[key]) {
                let fill = fills[key];
                this[fill.key] = typecast(fill.type, data[key]);
            }
        }
        this.client = client;

        this.raw = data;
    }

    static parseRaw(data, seperator = ":") {
        let splitData = data.split(seperator);
        let obj = {};

        for (let i = 0; i < splitData.length; i += 2) {
            let key = splitData[i];
            let value = splitData[i + 1];

            obj[key] = value;
        }

        return obj;
    }

    static parseMultilineRaw(data, seperator = ":", multilineSeparator = "|") {
        let ret = [];

        for (let item of data.split(multilineSeparator)) {
            ret.push(Structure.parseRaw(item, seperator));
        }
    }
}

Structure.FILLS = {
    1: { key: "id", type: "number"}
};

function typecast(type, value) {
    if (type == "string") {
        return value;
    } else if (type == "number") {
        return parseInt(value);
    } else if (type == "bool") {
        return value == "1";
    }
}

module.exports = Structure;