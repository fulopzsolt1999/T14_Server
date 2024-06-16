import fs from "fs";

fs.appendFile("ujFile.txt", "NodeJS teszt", function (err) {
   if (err) throw err;
   console.log("Fájl sikeresen létrehozva!");
});
