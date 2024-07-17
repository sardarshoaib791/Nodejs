//  ====>//nodejs background run dev like wrap this funtion in background

// (function (require, etc) {})();

//=====>

// const MLC = require("cli-color");
// console.log(MLC.green("I love TCOlor"));
// console.log(MLC.black("I love TCOlor"));

//=====> how to us loacl module (modeule every file in node js is module)

// const register = require("./auth");
// const reg = require("./auth");

// reg("@sardarshoaib91");

// ======> how to double module export

// const auth = require("./auth");

// auth.register("sardarshoaib91");
// auth.Login("sardarshoaib91", "Shoaib382");

//====> path modules

// const path = require("path");

// console.log("folder name:", path.dirname(__filename));
// console.log("file name:", path.basename(__filename));
// console.log("Extention name:", path.extname(__filename));
// console.log("Parse:", path.parse(__filename));
// console.log("Parse:", path.join(__dirname, "src", "App.js")); //important

//===========> File System
const path = require("path");
const fs = require("fs");

//make dirictory or folder

// fs.mkdir(path.join(__dirname, "/test"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("folder created");
// });

// create file

// fs.writeFile(
//   path.join(__dirname, "/test", "test.txt"),
//   "Hellow from node js \n",
//   fs.appendFile(
//     path.join(__dirname, "/test", "test.txt"),
//     `   more data`,
//     (err) => {
//       if (err) {
//         throw err;
//       }
//     }
//   ),
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("file created");
//   }
// );

// Read file

// fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   //   const data2 = Buffer.from(data);
//   //   console.log(data.toString());
//   //   console.log(data);
//   console.log(data);
// });

//==========> Operating System Module

// const os = require("os");

// console.log("my system type:", os.type());
// console.log("plateform: ", os.platform());
// console.log("Architech:", os.arch());
// // console.log("Details:", os.cpus());
// console.log("free Memory:", os.freemem());
// console.log("Total Memory:", os.totalmem());
// console.log("When my computer start:", os.uptime());

//====> Events Module
