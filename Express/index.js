const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");  // required to read req.body
const router = require("./UserRoutes");

const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1", router);

// app.get("/", (req, res) => {
//     res.send("<h1>HOME PAGE</h1>")
// });
// app.get("/about", (req, res) => {
//     res.send("<h1>ABOUT PAGE</h1>")
// });
// app.get("/contact", (req, res) => {
//     res.send("<h1>CONTACT PAGE</h1>")
// });

app.get("/", (req, res) => {
    // console.log(path.join(__dirname + "/index.html"));
    res.sendFile(path.join(__dirname + "/index.html"));
    // res.json({
    //     name: "Amit",
    //     email: "sample@gmail.com",
    //     password: "hexed",
    // });
});

// app.post("/api/v1/login", (req, res) => {
//     res.send(`<h1>Hello Mr. ${req.body.name}!</h1>
//     <h2>Your email id is ${req.body.email}</h2>
//     <h3>and your password is ${req.body.password}</h3>`);
//     console.log(req.body);
// })

app.listen(port, () => {
    console.log(`Server is working on port: ${port}`);
});

// REST (Representational State Transfer) is an API that defines a set of functions that programmers can use to send requests and receive responses using the HTTP protocol methods such as GET and POST.