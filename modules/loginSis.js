//funcion para buscar el Id de una cuenta
const findUser = (user, info, res) => {
    if (typeof user === "object" && typeof info === "object") {
        let index = user.findIndex((u) => u.name === info.name);
        if (index != -1) {
            if (res) {
                res.status(200).json(index)
            } else return [200, index]
        } else {
            if (res) {
                res.status(401).json(undefined)
            } else return [401, undefined]
        }
    } else if (user) {
        console.log("Ryjak error 001: user no especificados o incorrecta");
    } else {
        console.log("Ryjak error 001: user info no especificados o incorrecta");
    }

}

const validUser = (user, passwordUser, res) => {
    if (typeof user === "object" && typeof passwordUser === "string") {
        if (user.password === passwordUser) {
            if (res) {
                res.status(200).json(user)
            } else return [200, user]
        } else {
            if (res) {
                res.status(401).json(undefined)
            } else return [401, undefined]
        }
    } else if (user) {
        console.log("Ryjak error 001: user no especificados o incorrecta");
    } else {
        console.log("Ryjak error 001: user password no especificados o incorrecta");
    }

}

const login = (user, info, res) => {
    if (typeof user === "object" && typeof info === "object") {
        console.log("paso por login");
        let index = findUser(user, info)
        console.log(index);
        if (index[0] != 401) {
            if (res) {
                res.status(200).json(validUser(user[index[1]], info.password))
            } else return [200, validUser(user[index[1]], info)]
        } else {
            console.log("no hay ")
            if (res) {
                res.status(401).json(undefined)
            } else return [401, undefined]
        }

    } else if (user) {
        console.log("Ryjak error 001: user no especificados o incorrecta");
    } else {
        console.log("Ryjak error 001: user info no especificados o incorrecta");
    }
}

const createUser = (user, info) => {
    if (typeof user === "object" && typeof info === "object") {
        let newUser = { ...info, id: user.length + 1 };
        if (res) {
            res.status(200).json(newUser)
        } else return [200, newUser]
    } else if (user) {
        console.log("Ryjak error 001: user no especificados o incorrecta");
    } else {
        console.log("Ryjak error 001: user info no especificados o incorrecta");
    }
}

const onlyLogin = (user, info, si, no) => {
    if (user && info && typeof si == "function" && typeof no == "function") {
        if (login(user, info)[0] === 200) {
            si()
        } else { si() }
    } else console.log("Ryjak eror 004: la funcion onlyLogin no obtuvo los parametros correctos");
}
const onlyNoExisUser = async (user, info, no, si) => {
    if (user && info && typeof si == "function" && typeof no == "function") {
        let index = findUser(user, info)
        if (index[0] === 401) {
            si()
        } else no()
    } else console.log("Ryjak eror 004: la funcion onlyLogin no obtuvo los parametros correctos");
}

module.exports = {
    findUser,
    validUser,
    login,
    createUser,
    onlyLogin,
    onlyNoExisUser
}