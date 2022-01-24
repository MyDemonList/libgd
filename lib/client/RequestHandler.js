class RequestHandler {
    constructor(client) {
        /**
         * The client that is using this request handler.
         * @type {Client}
         */
        this.client = client;

        // handle requests
        this.register(require("./requests/GetLevelsRequest"))
    }

    register(Request) {
        this[Request.name] = new Request(this.client);
    }
}

module.exports = RequestHandler;