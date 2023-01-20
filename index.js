const colors = require("colors")

const findAccount = (user, info) => {
    if (typeof user === "object" && typeof info === "object") {
        if (user.findIndex((u) => u.user === info.user) != -1) {
            return user.findIndex((u) => u.user === info.user)
        } else return "404"
    } else if (user) {
        console.log("Ryjak error 001: user no especificados o incorrecta".red);
    } else {
        console.log("Ryjak error 001: user info no especificados o incorrecta".red);
    }

}

const loginUser = (user, passwordUser) => {
    if (typeof user === "object" && typeof passwordUser === "string") {
        if (user.password === passwordUser) {
            return user
        } else return "401"
    } else if (user) {
        console.log("Ryjak error 001: user no especificados o incorrecta".red);
    } else {
        console.log("Ryjak error 001: user password no especificados o incorrecta".red);
    }

}

const login = (user, info) => {
    if (typeof user === "object" && typeof info === "object") {
        let index = findAccount(user, info)
        if (index != "404") {
            return loginUser(user[index], info.password)
        } else return "404"
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
        return newUser;
    } else if (user) {
        console.log("Ryjak error 001: user no especificados o incorrecta".red);
    } else {
        console.log("Ryjak error 001: user info no especificados o incorrecta".red);
    }
}

const loginOrSignUP = (user, info) => {
    if (typeof user === "object" && typeof info === "object") {
        if (login(user, info) != "404") {
            return login(user, info)
        } else return signUP(user, info)
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