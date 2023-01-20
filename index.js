const colors = require("colors")

const findAccount = (user, info, res) => {
    if (typeof user === "object" && typeof info === "object") {
        console.log(user);
        console.log(typeof user);
        let index = user.findIndex((u) => u.user === info.name);
        if (index != -1) {
            console.log("#");
            if (res) {
                res.status(200).json(index)
            } else return[200, index]
        } else{
            if (res) {
                res.status(404).json(undefined)
            } else return [404, undefined]
        }
    } else if (user) {
        console.log("Ryjak error 001: user no especificados o incorrecta".red);
    } else {
        console.log("Ryjak error 001: user info no especificados o incorrecta".red);
    }

}

const loginUser = (user, passwordUser, res) => {
    if (typeof user === "object" && typeof passwordUser === "string") {
        if (user.password === passwordUser) {
            if (res) {
                res.status(200).json(user)
            } else return [200, user]
        } else{
            if (res) {
                res.status(401).json(undefined)
            } else return [401, undefined]
        }
    } else if (user) {
        console.log("Ryjak error 001: user no especificados o incorrecta".red);
    } else {
        console.log("Ryjak error 001: user password no especificados o incorrecta".red);
    }

}

const login = (user, info, res) => {
    if (typeof user === "object" && typeof info === "object") {
        let index = findAccount(user, info)
        if (index[0] != 404) {
            if (res) {
                res.status(200).json(loginUser(user[index[1]], info.password)[1])
            } else return [200, loginUser(user[index[1]], info.password)[1]]
        } else {
            if (res) {
                res.status(404).json(undefined)
            } else [404, undefined]
        }
        
    } else if (user) {
        console.log("Ryjak error 001: user no especificados o incorrecta".red);
    } else {
        console.log("Ryjak error 001: user info no especificados o incorrecta".red);
    }
}

const signUP = (user, info) => {
    if (typeof user === "object" && typeof info === "object") {
        let newUser = { ...info, id: user.length + 1 };
        user.push(newUser);
        if (res) {
            res.status(200).json(newUser)
        } else return [200, newUser]
    } else if (user) {
        console.log("Ryjak error 001: user no especificados o incorrecta".red);
    } else {
        console.log("Ryjak error 001: user info no especificados o incorrecta".red);
    }
}

const loginOrSignUP = (user, info,res) => {
    if (typeof user === "object" && typeof info === "object") {
        if (login(user, info)[0] != 404) {
            if (res) {
                return res.status(200).json(login(user, info)[1])
            } else return [200, login(user, info)[1]]
        } else if (res) {
            return res.status(200).json(signUP(user, info))
        } else return [200, signUP(user, info)]
    } else if (user) {
        console.log("Ryjak error 001: user no especificados o incorrecta".red);
    } else {
        console.log("Ryjak error 001: user info no especificados o incorrecta".red);
    }
}

module.exports = {
    findAccount,
    loginUser,
    login,
    signUP,
    loginOrSignUP
}