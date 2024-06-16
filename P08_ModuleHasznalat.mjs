import http from "http";
import {NodeKiir} from "./modul.mjs";

http
   .createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.write(NodeKiir());
      res.end();
   })
   .listen(3000);
