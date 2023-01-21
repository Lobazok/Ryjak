# Ryjak
Ryjak a javaScript FrameWork for the BackEnd focused on providing recurring functions of web development based on Express

## Introduction
FrameWork Ryjak is an **Express-based Javascipt** framework for the **Backend**, features are provided that package frequent intrusions

~~~ JavaScript
app.get("/user", async (req, res) => {
    let data = await Ryjak.requestGET("http://localhost:3007/Users")
    response(res, data)
})

app.get("/user", async (req, res) => {
    let data = await Ryjak.requestGET("http://localhost:3007/Users")
    response(res, [200, data], true)
})
~~~

## DataBase
soon