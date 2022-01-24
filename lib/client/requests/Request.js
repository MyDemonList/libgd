const fetch = require('node-fetch');
const { URLSearchParams, URL } = require('url');
const { GdSecret, GdBinaryVersion, GdGameVersion } = require('../../util/Constants');

class Request {
    constructor(client, path) {
        this.client = client;
        this.path = path;
        this.default_parameters = {};
    }

    /**
     * Gets the url for this request.
     * @returns {string} The url for this request.
     */
    get url() {
        return new URL(this.path, this.client.hostname);
    }

    /**
     * Sets the default parameters for this request.
     * @param {object} params The default parameters.
     * @private
     */
    setDefaultParameters(params) {
        this.default_parameters = params;
    }

    /**
     * Privately handles the request.
     * @param {*} data The data to send.
     * @param {*} defaultParameters The default parameters.
     * @returns {Promise<*>} The response.
     * 
     * @private
     */
    async _handle(data, defaultParameters = this.default_parameters) {
        return new Promise(async (resolve, reject) => {
            const params = new URLSearchParams();

            // append beginner data
            params.append("gameVersion", GdGameVersion);
            params.append("binaryVersion", GdBinaryVersion);

            // handle body data
            data = Request.matchParameters(defaultParameters, data);
            for (let key in data) {
                params.append(key, data[key]);
            }

            this.last_request_body = data;

            // append gd secret
            params.append("secret", GdSecret)

            // send request
            fetch(this.url, {
                method: 'POST',
                body: params,
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "User-Agent": "",
                }
            })
                .then(res => res.text()
                    .then(resolve))
                .catch(reject);
        })
    }

    /**
     * Matches a set of given parameters with a set of default parameters.
     * @param {object} parameters The default parameters.
     * @param {object} assigns The parameters to match to the default parameters.
     * @returns {object} The matched parameters.
     */
    static matchParameters(parameters, assigns) {
        let object = {};

        for (let key in parameters) {
            let match = assigns[key];
            let keySet = key;

            if (parameters[key]._as)
                keySet = parameters[key]._as;


            if (parameters[key][match]) {
                object[keySet] = parameters[key][match];
            } else if (parameters[key].default) {
                object[keySet] = parameters[key].default;
            }
        }

        for (let key in assigns) {
            if (!object[key])
                object[key] = assigns[key];
        }

        return object;
    }
}

module.exports = Request;