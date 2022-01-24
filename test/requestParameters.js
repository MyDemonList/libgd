const Request = require("../lib/client/requests/Request")

var defaultParameters = {
    foo: {
        bar: "bar",
        default: "not bar"
    },
    bar: {
        default: "foo"
    }
}

var parameters = {
    foo: "bar",
    bar: "baba"
}

// why did this work the first try
console.log(Request.matchParameters(defaultParameters, parameters))