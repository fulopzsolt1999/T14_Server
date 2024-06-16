import fs from "fs";

fs.rename("uresFile.txt", "atnevezettFile.txt", function (err) {
   if (err) throw err;
   console.log("File átnevezve");
})