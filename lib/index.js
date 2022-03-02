module.exports = {
    // CLIENT
    Client: require("./client/Client"),
    RequestHandler: require("./client/RequestHandler"),

    // REQUESTS
    Request: require("./client/requests/Request"),
    GetLevelsRequest: require("./client/requests/GetLevelsRequest"),

    // MANAGERS
    LevelManager: require("./managers/LevelManager"),
    Manager: require("./managers/Manager"),

    // STRUCTURES
    LevelStructure: require("./structures/Level"),
    Structure: require("./structures/Structure"),

    // UTIL
    LevelNotFoundError: require("./util/errors/LevelNotFoundError"),

    Collection: require("./util/Collection"),
    Constants: require("./util/Constants"),
    Util: require("./util/Util")
}