const LevelManager = require("../managers/LevelManager");
const { DefaultClientOptions } = require("../util/Constants");
const Util = require("../util/Util");
const RequestHandler = require("./RequestHandler");

class Client {
    constructor(options = {}) {
        /**
         * The options belonging to the client.
         * @type {ClientOptions}
         */
        this.options = Util.mergeObjects(DefaultClientOptions, options);

        /**
         * The request handler for this client.
         * @type {RequestHandler}
         */
        this.requests = new RequestHandler(this);

        /**
         * The level manager for this client.
         * @type {LevelManager}
         */
        this.levels = new LevelManager(this);
    }
}

module.exports = Client;