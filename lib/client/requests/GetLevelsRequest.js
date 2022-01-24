const Level = require("../../structures/Level");
const LevelNotFoundError = require("../../util/errors/LevelNotFoundError");
const Request = require("./Request");

class GetLevelsRequest extends Request {
    constructor(client) {
        super(client, "/database/getGJLevels21.php");

        this.setDefaultParameters({
            sort: {
                likes: 0,
                downloads: 1,
                trending: 3,
                recent: 4,
                featured: 6,
                magic: 7,
                default: "0",
                _as: "type"
            },
            difficulty: {
                demon: -2,
                na: -1,
                easy: 1,
                normal: 2,
                hard: 3,
                harder: 4,
                insane: 5,
                default: "-",
                _as: "diff"
            },
            length: {
                tiny: 0,
                short: 1,
                medium: 2,
                long: 3,
                xl: 4,
                extralong: 4,
                default: "-",
                _as: "len"
            },
            demon: {
                default: "-",
                _as: "demon"
            }
        })
    }

    /**
     * Searches for levels by query.
     * @param {string} query The query to search with.
     * @param {object} options The options to search with.
     * @returns {Promise<Level[]>} The levels found.
     */
    async search(query, options = {}) {
        let levels = [];
        // assign extra parameters to the object 
        options = Object.assign(options, {
            str: query,
            page: '0',
            total: '0',
            uncompleted: '0',
            onlyCompleted: '0',
            featured: '0',
            original: '0',
            twoPlayer: '0',
            coins: '0',
            epic: '0',
        })

        let result = await this._handle(options);

        if (result == "-1") {
            throw new LevelNotFoundError("No levels were found with this query.", this.lastRequestBody);
        }

        result = result.split("#");

        // handle users
        let users = result[1].split("|")

        users = users.map((x) => {
            x = x.split(":");
            
            return {
                userID: x[0],
                accountID: x[2],
                username: x[1]
            }
        });

        // handle levels
        for (let level of result[0].split("|")) {
            levels.push(new Level(this.client, level));
        }

        return levels;
    }
}

module.exports = GetLevelsRequest