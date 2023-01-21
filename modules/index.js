const { findAccount, login, loginOrSignUP, loginUser, signUP} = require("./loginSis")
const { response, peticionHTTP, peticionGET, peticionPOST, peticionPUT, peticionPATCH, peticionDELETE } = require("./apiSis")

const Ryjak = {
    findAccount   : findAccount   , 
    loginUser     : loginUser     ,
    login         : login         ,
    signUP        : signUP        ,
    loginOrSignUP : loginOrSignUP ,
	response      : response      ,
	peticionHTTP  : peticionHTTP  ,
    peticionGET   : peticionGET   ,
    peticionPOST  : peticionPOST  ,
    peticionPUT   : peticionPUT   ,
    peticionPATCH : peticionPATCH ,
    peticionDELETE: peticionDELETE
}

module.exports = Ryjak
