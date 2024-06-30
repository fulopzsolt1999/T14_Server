import {MongoClient} from "mongodb";
const url = "mongodb+srv://fulopzsolt1999:<pw>@t14-fzs.cihzo09.mongodb.net/";
async function updateManyData() {
   try {
      const client = await MongoClient.connect(url);
      const db = client.db("T14");
      const collection = db.collection("mintaKollekcio");

      const searchMinta = {nev: "Békés Csaba"};
      const updateMinta = {$set: {fizetes: 500000}};
      await collection.updateMany(searchMinta, updateMinta);

      console.log("Frissítés megtörtént.");
      client.close();
   } catch (error) {
      console.error("Error.", error);
   }
}

updateManyData();
