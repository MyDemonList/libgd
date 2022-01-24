class LevelNotFoundError extends Error {
    constructor(message, query) {
        super(message);

        /**
         * The name of the error
         * @type {string}
         */
        this.name = "LevelNotFoundError";

        /**
         * The options used to search for the level.
         * @type {Object}
         */
        this.options = query;

        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(this, LevelNotFoundError);
    }
}

module.exports = LevelNotFoundError;