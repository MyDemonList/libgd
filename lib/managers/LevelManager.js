const Level = require("../structures/Level");
const Manager = require("./Manager");

class LevelManager extends Manager {
    constructor(client) {
        super(client, Level);
    }

    /**
     * Searches for levels by query.
     * @param {string} query The query to search with.
     * @param {object} options The options to search with.
     * @param {boolean} [recache=false] Whether to recache the results.
     * @returns {Promise<Level[]>} The levels found.
     */
    async search(query, options = {}, recache = false) {
        let levels = await this.client.requests["GetLevelsRequest"].search(query, options);
        let ret = [];


        if (this.client.options.managerCache == false) {
            return levels;
        } else {
            if (this.client.options.managerCacheTime == 0)
                recache = true;

            for (let level of levels) {
                if (recache) {
                    this.lastCacheStorage.set(level.id, Date.now());
                    this.set(level.id, level);
    
                    ret.push(level);
                } else {
                    // 1 hour cache expiry time
                    // might make this an option later tbh
                    if (this.has(level.id)) {
                        // level cached and added, check for its expiry time
                        if ((this.lastCacheStorage.get(level.id) + this.client.options.managerCacheTime) <= Date.now() || !this.lastCacheStorage.has(level.id)) {
                            this.lastCacheStorage.set(level.id, Date.now());
                        } else {
                            // use current cache'd item
                            ret.push(this.get(level.id));
                        }
                    } else {
                        // level not cached
                        this.lastCacheStorage.set(level.id, Date.now());
                        this.set(level.id, level);
    
                        ret.push(level);
                    }
                }
    
                ret.push(level);
            }
        }

        return ret;
    }
}

module.exports = LevelManager;