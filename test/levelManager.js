const Client = require("../lib/client/Client");

(async() => {
    let gd = new Client("http://www.boomlings.com");

    //send a request
    let data = await gd.levels.search("Masochism II");
})();
