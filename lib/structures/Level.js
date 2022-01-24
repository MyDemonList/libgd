const Structure = require("./Structure");

class Level extends Structure {
    constructor(client, data) {
        super(client, data, Level.FILLS);

        // handle b64 data
        this.description = Buffer.from(this.description, "base64").toString("utf8");
    }
}

Level.FILLS = {
    1: { key: 'id', type: 'number' },
    2: { key: 'name', type: 'string' },
    3: { key: 'description', type: 'string' },
    4: { key: 'levelString', type: 'string' },
    5: { key: 'version', type: 'number' },
    6: { key: 'authorID', type: 'number' },
    8: { key: 'diffDen', type: 'number' },
    9: { key: 'diffNum', type: 'number' },
    10: { key: 'downloads', type: 'number' },
    11: { key: 'completes', type: 'number' },
    12: { key: 'officialSong', type: 'number' },
    13: { key: 'gameVersion', type: 'number' },
    14: { key: 'likes', type: 'number' },
    15: { key: 'length', type: 'number' },
    16: { key: 'dislikes', type: 'number' },
    17: { key: 'demon', type: 'bool' },
    18: { key: 'stars', type: 'number' },
    19: { key: 'featureScore', type: 'number' },
    25: { key: 'auto', type: 'bool' },
    26: { key: 'recordString', type: 'string' },
    27: { key: 'password', type: 'string' },
    28: { key: 'uploadDate', type: 'string' },
    29: { key: 'updateDate', type: 'string' },
    30: { key: 'copiedID', type: 'number' },
    31: { key: 'twoPlayer', type: 'bool' },
    35: { key: 'customSongID', type: 'number' },
    36: { key: 'extraString', type: 'string' },
    37: { key: 'coins', type: 'number' },
    38: { key: 'verifiedCoins', type: 'bool' },
    39: { key: 'starsRequested', type: 'number' },
    40: { key: 'ldm', type: 'bool' },
    41: { key: 'dailyNumber', type: 'number' },
    42: { key: 'epic', type: 'bool' },
    43: { key: 'demonDiff', type: 'number' },
    44: { key: 'isGauntlet', type: 'bool' },
    45: { key: 'objects', type: 'number' },
    46: { key: 'editorTime', type: 'number' },
    47: { key: 'editorTimeCopies', type: 'number' }
};

module.exports = Level;