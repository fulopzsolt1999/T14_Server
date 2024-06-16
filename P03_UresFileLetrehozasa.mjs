import {log} from "console";
import fs from "fs";

fs.open("uresFile.txt", "w", function (err) {
   if (err) throw err;
   console.log("Üres file létrehozva");
});
