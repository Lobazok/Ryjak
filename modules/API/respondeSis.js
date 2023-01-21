const response = (res, array = [], bool = true) => {
    if (array) {
        if (bool === true) {
            return res.status(array[0]).json(array[1])
        } else if (bool === false) {
            return res.status(200).json(array)
        } else console.log("Ryjak error 002: bool de status no especificado".red);
    } else console.log("Ryjak error 001: array no especificado".red);
}

module.exports = {
    response
}