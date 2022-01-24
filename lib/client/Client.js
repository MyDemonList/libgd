const RequestHandler = require("./RequestHandler");

class Client {
    constructor(hostname) {
        this.hostname = hostname;

        this.requests = new RequestHandler(this);
    }
}

module.exports = Client;