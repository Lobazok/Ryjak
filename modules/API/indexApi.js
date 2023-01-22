const { requestHTTP, requestGET, requestPOST, requestPATCH, requestPUT, requestDELETE } = require("./requestSis")
const { response } = require("./respondeSis")

const Ryjak = {
    response     : response     ,
    requestHTTP  : requestHTTP  ,
    requestGET   : requestGET   ,
    requestPOST  : requestPOST  ,
    requestPATCH : requestPATCH ,
    requestPUT   : requestPUT   ,
    requestDELETE: requestDELETE
}

module.exports = Ryjak