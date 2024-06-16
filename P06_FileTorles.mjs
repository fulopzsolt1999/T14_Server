import fs from "fs";

fs.unlink("atnevezettFile.txt", function (err) {
   if (err) throw err;
   console.log("Az üres file törölve");
});
