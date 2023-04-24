// const http = require('http'); //require is the fn used to import modules
// const fs = require('fs'); //fileSystem

// const handler = (req,res) =>{
//     console.log(req.url);
//     res.setHeader("Content-Type", "text/html");
//     let url = req.url;
//     let method = req.method;
//     if(url === '/') {
//     //     res.write('home');
//     // } else if (url === '/about') {
//     //     res.write('we are awesome');
//     // } else {
//     //     res.write('page not found');
//     // }
    
//     res.write('<html>');
//     res.write('<head><title>Amit</title></head>');
//     res.write('<body><form action="/message" method="POST"><input type="text" name="man" /><button type="submit">Send</button></form></body>');
//     res.write('</html>');
//     res.end();
//     } else if(url === '/message' && method === 'POST') {
//         const body = [];

//         req.on('data',chunk=>{{
//             console.log(chunk);
//             body.push(chunk);
//         }});
//         req.on('end',()=>{
//             const parsedBody = Buffer.concat(body).toString();
//             console.log(parsedBody);

//             const message = parsedBody.split("=")[1]
//             fs.writeFile("message.txt", message);
//         })
//         console.log(req.body);

//         // res.statusCode = 302;
//         // res.setHeader("Location", "/");
//         // OR
//         res.writeHead(302, {
//             Location: "/",
//         })
//         res.end();
//     }
// };

// const server = http.createServer(handler)

// server.listen(3000);














// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/add-product", (req, res, next) => {
//   res.send(
//     "<form action='/product' method='POST'> <input type='text' name='title'> <button type='submit'>Send</button></form>"
//   );
// });

// app.use("/product", (req, res) => {
//   console.log(req.body);
//   res.redirect("/");
// });

// app.use("/", (req, res) => {
//   res.send("home");
// });

// app.listen(3000);







const express = require("express");
const bodyParser = require("body-parser");

const productRoutes = require("./routes/product");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// app.use(amitEncoded);

app.use(productRoutes);

app.listen(3000);

// function amitEncoded(req, res, next) {
//   console.log("Amit Rocks");
//   next();
// }