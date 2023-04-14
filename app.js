let express = require('express');
let app = express();
const PORT = 3000



//jwt
let jwt = require('jsonwebtoken');

let data = {
    user: "Renaldi",
    passw: "Aya"
};

//routing
app.get("/", (request,response) => 
response.send("Selamat Datang di Integrasi JWT Renal")
);

//verifikasi

function verifikasi(request, response,next) {
    let getHeader = request.headers["auth"];
    if (typeof getHeader !== "undefined") {
        request.token = getHeader;
        next();
    } else {
        response.sendStatus(403);
    }
}

jwt.sign(
    {
        data: data
    },
    "secret", 
    (err, token) => {
        console.log(token);
    }
);

//memberikan list biodata

app.get("/data", verifikasi, (request, response) => {
    jwt.verify(request.token, "secret", (err, dataAuth) => {
        if (err) {
            response.sendStatus(403);
        } else {
            response.json(data);
        }
    });
});

app.listen(PORT, () => {
    console.log("App running on port: ", PORT);
  })