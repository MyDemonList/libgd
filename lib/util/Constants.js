/**
 * ALl of the default client options.
 * @typedef {object} ClientOptions
 * @property {string} [hostname="http://www.boomlings.com/"] The hostname of the server to access.
 * @property {boolean} [managerCache=true] Whether or not to cache requested objects via managers.
 * @property {number} [managerCacheTime=3600000] The time in milliseconds to cache objects.
 */
exports.DefaultClientOptions = {
    hostname: "http://www.boomlings.com/",

    managerCache: true,
    managerCacheTime: 1000 * 60 * 60,
}

exports.GdGameVersion = "21";

exports.GdBinaryVersion = "35";

exports.GdSecret = "Wmfd2893gb7";