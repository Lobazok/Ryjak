const { peticionHTTP, peticionGET, peticionPOST, peticionPUT, peticionPATCH, peticionDELETE } = require("./requestSis")
const { response } = require("./respondeSis")

const Ryjak = {
    response      : response      ,
    peticionHTTP  : peticionHTTP  ,
    peticionGET   : peticionGET   ,
    peticionPOST  : peticionPOST  ,
    peticionPUT   : peticionPUT   ,
    peticionPATCH : peticionPATCH ,
    peticionDELETE: peticionDELETE
}

module.exports = Ryjak