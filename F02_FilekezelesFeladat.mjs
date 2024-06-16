// A randomszamok.txt állományba írj ki legalább 10 random generált számot.
import fs from "fs";

fs.appendFile("randomszamok.txt", getRandomNumbers(10).join() + "\n", function (err) {
   if (err) throw err;
   console.log("Random számok mentve");
});

function getRandomNumbers(numbers) {
   let generatedNumbers = [];
   for (let i = 0; i < numbers; i++) {
      generatedNumbers.push(Math.floor(Math.random() * 100));
   }
   return generatedNumbers.sort();
}
