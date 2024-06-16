// A tanulo.txt állományba írd bele a nevedet.
import fs from "fs";

fs.appendFile("tanulo.txt", "Fülöp Zsolt", function (err) {
   if (err) throw err;
   console.log("Fájl sikeresen létrehozva!");
});
