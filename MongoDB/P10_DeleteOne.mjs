import {MongoClient} from "mongodb";
const url = "mongodb+srv://fulopzsolt1999:<pw>@t14-fzs.cihzo09.mongodb.net/";
async function deleteData() {
   try {
      const client = await MongoClient.connect(url);
      const db = client.db("T14");
      const collection = db.collection("mintaKollekcio");

      var deleteMinta = {nev: "Békés Csaba"};
      const result = await collection.deleteOne(deleteMinta);

      console.log(result.deletedCount, "elem törölve");
      client.close();
   } catch (error) {
      console.error("Hiba történt a collection creation közben.", error);
   }
}

deleteData();
