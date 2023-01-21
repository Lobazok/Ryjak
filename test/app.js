// se utilizan Express y cors
const express = require("express");
const cors = require("cors");
const { json } = require("express");
const {peticionGET, response} = require("../modules/index.js")
const app = express();

app.use(express.json());

let puerto = 3006;
//definimos quienes pueden usar la API
const whitelist = ["http://localhost:5173/"]

app.use(cors())
let active = true
//las peticiones siempre pasan por esta funcion y despues siguen normal(opcional)
app.use((req, res, next) => {
    if (active === true) {
        console.log("Peticion entrante: Ruta:" + req.url + ", Metodo: " + req.method);
        next();
    } else next();
})

app.get("/user", async (req, res) => {
    let data = await Ryjak.peticionGET("http://localhost:3007/Users")
    response(res, data)
})

app.get("/user", async (req, res) => {
    let data = await Ryjak.peticionGET("http://localhost:3007/Users")
    response(res, [200, data], true)
})

let user = [];

async function peticionGET() {
    
}


name()