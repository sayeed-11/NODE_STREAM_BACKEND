const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  const readableStream = fs.createReadStream("./sample2.txt", {
    encoding: "utf-8",
  });

//   readableStream.on("data", (chunk) => {
//     console.clear();
//     console.log(chunk);
//   });

  if (req.url === "/") {
    readableStream.pipe(res);
    // res.end();
  }
  if(req.url === '/upload'){
    const writableStream = fs.createWriteStream('./output.txt');
    readableStream.pipe(writableStream);
    res.end();
  }

  if(req.url === '/show'){
    readableStream.pipe(res);
  }
});

server.listen(8000, () => {
  console.log("server is running at PORT : ", 8000);
});
