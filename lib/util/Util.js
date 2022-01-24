class Util {
    constructor() {
        throw new Error("This class cannot be instantiated.");
    }

    /**
     * Function to merge two objects with eachother, and replace the values of the first with the second.
     * @param {Object} object The base object.
     * @param {Object} merge The object to merge with the base object.
     * @returns {Object} The combined objects.
     */
     static mergeObjects(object, merge) {
        let keys = Object.keys(object);

        keys.forEach((key) => {
            if ((object[key] instanceof Array) && merge[key])
                merge[key].forEach((data) => object[keys].push(data));

            if ((object[key] instanceof Object) && merge[key])
                object[key] = Util.mergeObjects(object[key], merge[key]);

            if (merge[key])
                object[key] = merge[key];
        });

        return object;
    }
}

module.exports = Util;