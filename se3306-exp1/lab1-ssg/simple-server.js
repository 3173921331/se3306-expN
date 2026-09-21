import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'dist', req.url === '/' ? 'index.html' : req.url);
  fs.readFile(filePath, (err, data) => {
    if(err) {
      res.writeHead(404, {"Content-Type":"text/plain;charset=utf-8"});
      res.end("not found");
      return;
    }
    // 加上 charset=utf‑8，解决中文乱码
    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    res.end(data);
  })
})

server.listen(8080, ()=>{
  console.log("SSG 服务启动成功！访问：http://127.0.0.1:8080");
});
