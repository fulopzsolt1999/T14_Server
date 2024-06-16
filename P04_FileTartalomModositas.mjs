import fs from "fs";

fs.writeFile("uresFile.txt", "Módosítások végrehajtva", function (err) {
   if (err) throw err;
   console.log("Tartalom módosítva");
});
