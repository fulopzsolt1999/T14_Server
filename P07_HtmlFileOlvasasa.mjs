import fs from "fs";
import http from "http";

http
   .createServer(function (req, res) {
      fs.readFile("tananyag.html", "utf-8", function (err, data) {
         if (err) {
            console.log(err);
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.end("Hiba történt a fájl megnyitása közben.");
         } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end("Sikeres adatbetöltés.");
         }
      });
   })
   .listen(3000);
