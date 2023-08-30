const http = require("http");

http
  .createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.end("<p>Hello World!</p>");
    if (req.url === "/") {
      res.writeHead(200);
      res.end("delete url");
    } else if (req.url === "/upload") {
      res.writeHead(200);
      res.end("upload url");
    } else if (req.ulr === "/delete") {
      res.writeHead(200);
      res.end("delete url");
    } else {
      res.writeHead(404)
      res.end("Not found!");

    }
  })
  .listen(3000, () => {
    console.log("3000 포트 서버 접속 완료!");
  });

// 포트
// 서버내의 프로세스를 구분하는 번호
