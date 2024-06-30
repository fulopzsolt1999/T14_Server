import {MongoClient} from "mongodb";
const url = "mongodb+srv://fulopzsolt1999:<pw>@t14-fzs.cihzo09.mongodb.net/";
async function updateData() {
   try {
      const client = await MongoClient.connect(url);
      const db = client.db("T14");
      const collection = db.collection("mintaKollekcio");

      const searchMinta = {nev: "Fejet Lenke"};
      const updateMinta = {$set: {kor: 25}};
      await collection.updateOne(searchMinta, updateMinta);

      console.log("Frissítés megtörtént.");
      client.close();
   } catch (error) {
      console.error("Error.", error);
   }
}
updateData();
