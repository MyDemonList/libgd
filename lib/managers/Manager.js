const Collection = require("../util/Collection");

/**
 * A basic manager for a bunch of objects.
 * @extends {Collection}
 */
class Manager extends Collection {
    constructor(client, iterable) {
        super(iterable);

        /**
         * The client that created this collection.
         * @type {Client}
         */
        this.client = client;

        
        /**
         * The items that were last cache.
         * @type {Map<Object>}
         */
        this.lastCacheStorage = new Map();
    }
}

module.exports = Manager;