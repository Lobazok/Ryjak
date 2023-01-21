const { findUser, validUser, login,  createUser, onlyLogin } = require("./loginSis")
const { response, peticionHTTP, peticionGET, peticionPOST, peticionPUT, peticionPATCH, peticionDELETE } = require("./API/indexApi")

const Ryjak = {
    findUser      : findUser,
    validUser     : validUser,
    login         : login,
    createUser    : createUser,
    onlyLogin     : onlyLogin,
    response      : response,
    peticionHTTP  : peticionHTTP,
    peticionGET   : peticionGET,
    peticionPOST  : peticionPOST,
    peticionPUT   : peticionPUT,
    peticionPATCH : peticionPATCH,
    peticionDELETE: peticionDELETE
}

module.exports = Ryjak
