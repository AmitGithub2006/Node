//1.
// File based
// const a = {
//     avg : (a, b) => {
//         console.log((a+b) / 2);
//     },
//     percent : (a, b) => {
//         console.log((a*b) / 100);
//     }
// }
// module.exports = a;

//2.
// Build in
//i.
// const fs = require('fs');
// const a = fs.readFileSync("./sample.txt", "utf-8", (err, data) => {
//     if(err) {
//         return err;
//     }
//     console.log(data);
// });
// console.log(a);
// console.log("I am first");

//ii. To generate a file
// const fs = require('fs');
// const a = "THIS IS MADE BY AMIT";
// fs.writeFile("./sample2.txt", a, () => {
//     console.log("Written sample");
// });
// console.log("I am first");

//PATH
// const path = require('path');
// const a = path.extname("./practice/index.js");
// const b = path.basename("E:/Node/Practice");
// const c = path.dirname("E:/Node/Practice");
// const d = path.join("E:/Node/Practice"+"/amit");
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//os
// const os = require("os");
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.hostname());

// 3.
// Third party modules
// const pokemon = require("pokemon");
// console.log(pokemon.random());
// console.log(pokemon.all());

// Creating server
const http = require("http");
const fs = require("fs");
// const PORT = process.env.PORT;
const PORT = 2000;
const hostname = "localhost";
const home = fs.readFileSync("./index.html");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(home);
  } else if (req.url === "/about") {
    res.end("<h1>ABOUT PAGE</h1>");
  } else if (req.url === "/contact") {
    res.end("<h1>CONTACT PAGE</h1>");
  } else if (req.url === "/service") {
    res.end("<h1>SERVICE PAGE</h1>");
  } else {
    res.end("<h1>Invalid url</h1>");
  }
});
server.listen(PORT, hostname, () => {
  console.log(`Server is working on http://${hostname}:${PORT}`);
});
