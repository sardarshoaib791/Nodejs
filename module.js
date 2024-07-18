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
// const path = require("path");
// const fs = require("fs");

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

// const Emiter = require("events");
// const { register } = require("module");
// const { emit } = require("process");

// const myEmit = new Emiter();

// myEmit.on("someName", (data) => {
//   console.log(data);
// });

// myEmit.emit("someName", {
//   name: "shoaib",
// });

// class Auth extends Emiter {
//   register(username, password) {
//     console.log(`${username} regiterd succesfully`);
//     this.emit("registered", username);
//     this.emit("password", password);
//   }
// }

// const clasObject = new Auth();
// //Listner
// clasObject.on("registered", (data) => {
//   console.log(`email verification sending to ${data}`);
// });
// //Listner
// clasObject.on("password", (pass) => {
//   console.log(`your password created ${pass}`);
// });
// clasObject.register("shoaib", "sdfghjkuyugy");

///=========>> HTTP module:(Most Important)

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((request, response) => {
  //   console.log(request.url);
  //   response.writeHead(200, {
  //     "Content-Type": "text/html",
  //   });

  //   if (request.url === "/") {
  //     fs.readFile(path.join(__dirname, "/src", "index.html"), (err, content) => {
  //       if (err) {
  //         throw err;
  //       }
  //       response.end(content);
  //     });
  //   } else if (request.url === "/about")
  //     fs.readFile(path.join(__dirname, "/src", "about.html"), (err, content) => {
  //       if (err) {
  //         throw err;
  //       }
  //       response.end(content);
  //     });
  let filePath = path.join(
    __dirname,
    "src",
    request.url === "/" ? "index.html" : request.url
  );
  let ContentType = "text/html";
  let ext = path.extname(filePath);
  if (!ext) {
    filePath += ".html";
  }
  switch (ext) {
    case ".css":
      ContentType = "text/css";
      break;
    case ".js":
      ContentType = "text/javascript";
      break;
    default:
      ContentType = "text/html";
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, "src", "error.html"), (err, data) => {
        if (err) {
          response.writeHead(500);
          response.end("ERROR...");
        } else {
          response.writeHead(404, {
            "Content-Type": ContentType,
          });
          response.end(data);
        }
      });
    } else {
      response.writeHead(200, {
        "Content-Type": ContentType,
      });
      response.end(content);
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Listing at " + PORT);
});
