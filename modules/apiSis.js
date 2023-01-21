const response = (res, array = [], bool = true) => {
    if (array) {
        if (bool === true) {
            return res.status(array[0]).json(array[1])
        } else if (bool === false) {
            return res.status(200).json(array)
        } else console.log("Ryjak error 002: bool de status no especificado".red);
    } else console.log("Ryjak error 001: array no especificado".red);
}

const peticionHTTP = async (url = "", method = "GET", jsonData = {}) => {
    if (url) {
        let opy = {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData)
        }

        let data
        await fetch(url, opy)
            .then(response => response.json())
            .then(dataR => data = dataR)
            .catch(error => console.log(error))

        return data
    } else console.log("Ryjak error 003: url en peticionHTTP no especificado".red);
}

const peticionGET = async (url = "", jsonData = {}) => {
    if (url) {
        let opy = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData)
        }

        let data
        await fetch(url, opy)
            .then(response => response.json())
            .then(dataR => data = dataR)
            .catch(error => console.log(error))

        return data
    } else console.log("Ryjak error 003: url en peticionHTTP no especificado".red);

}

const peticionPOST = async (url = "", jsonData = {}) => {
    if (url) {
        let opy = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData)
        }

        let data
        await fetch(url, opy)
            .then(response => response.json())
            .then(dataR => data = dataR)
            .catch(error => console.log(error))

        return data
    } else console.log("Ryjak error 003: url en peticionHTTP no especificado".red);

}

const peticionPUT = async (url = "", jsonData = {}) => {
    if (url) {
        let opy = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData)
        }

        let data
        await fetch(url, opy)
            .then(response => response.json())
            .then(dataR => data = dataR)
            .catch(error => console.log(error))

        return data
    } else console.log("Ryjak error 003: url en peticionHTTP no especificado".red);

}

const peticionPATCH = async (url = "", jsonData = {}) => {
    if (url) {
        let opy = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData)
        }

        let data
        await fetch(url, opy)
            .then(response => response.json())
            .then(dataR => data = dataR)
            .catch(error => console.log(error))

        return data
    } else console.log("Ryjak error 003: url en peticionHTTP no especificado".red);

}

const peticionDELETE = (url = "", jsonData = {}) => {
    if (url) {
        let opy = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData)
        }

        let data
        fetch(url, opy)
            .then(response => response.json())
            .then(dataR => data = dataR)
            .catch(error => console.log(error))

        return data
    } else console.log("Ryjak error 003: url en peticionHTTP no especificado".red);

}

module.exports = {
    response,
    peticionHTTP,
    peticionGET,
    peticionPOST,
    peticionPUT,
    peticionPATCH,
    peticionDELETE
}