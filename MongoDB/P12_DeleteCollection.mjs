import {MongoClient} from "mongodb";
const url = "mongodb+srv://fulopzsolt1999:uA83824571@t14-fzs.cihzo09.mongodb.net/";

async function deleteCollection() {
   try {
      const client = await MongoClient.connect(url);
      const db = client.db("T14");
      const collection = db.collection("mintaKollekcio");

      await collection.drop();

      console.log("Deleted Collection.");
      client.close();
   } catch (error) {
      console.error("Hiba történt a collection creation közben.", error);
   }
}

deleteCollection();
