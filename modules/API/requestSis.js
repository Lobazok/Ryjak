const requestHTTP = async (url, jsonData, method = "GET") => {
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
    } else console.log("Ryjak error 003: url en requestHTTP no especificado".red);
}

const requestGET = async (url, jsonData) => {
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
    } else console.log("Ryjak error 003: url en requestGET no especificado".red);

}

const requestPOST = async (url, jsonData) => {
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
    } else console.log("Ryjak error 003: url en requestPOST no especificado".red);

}

const requestPUT = async (url, jsonData) => {
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
    } else console.log("Ryjak error 003: url en requestPUT no especificado".red);

}

const requestPATCH = async (url, jsonData) => {
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
    } else console.log("Ryjak error 003: url en requestPATCH no especificado".red);

}

const requestDELETE = (url = "", jsonData = {}) => {
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
    } else console.log("Ryjak error 003: url en requestDELETE no especificado".red);

}

module.exports = {
    requestHTTP,
    requestGET,
    requestPOST,
    requestPUT,
    requestPATCH,
    requestDELETE
}