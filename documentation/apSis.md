# Ryjak API management system
that makes this module, the module ***API management system*** is **responsible for packaging** the **communication with APIs** and
the response with **HTTP clients**

## Request HTTP
**HTTP Requests in Ryjak** are handled using **Request** functions,
**request functions are functions that package** the code of a normal request *Fecth*

### requestHTTP
the function ***requestHTTP*** packs the code of a *request fecth*, resive three *parameters* the **URL**, the **Body** of the request and the **method** by *defesto GET*
~~~ JavaScript
    let data = await Ryjak.requestHTTP("http://localhost:3007/Users");
~~~
~~~ JavaScript
    let data = await Ryjak.requestHTTP("http://localhost:3007/Users", JsonData, "POST");
~~~

### Other requests
all other functions ***requestGET*** work in the same way packs the code of a *request fecth*, *resiven dos parameters* the **URL** and the **body** of the request
~~~ JavaScript
    let data = await Ryjak.requestGET("http://localhost:3007/Users");
~~~
~~~ JavaScript
    let data = await Ryjak.requestPOST("http://localhost:3007/Users", {
        //Json Data
    });
~~~