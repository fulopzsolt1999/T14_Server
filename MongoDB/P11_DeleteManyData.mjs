import {MongoClient} from "mongodb";
const url = "mongodb+srv://fulopzsolt1999:qwe123@t14-fzs.cihzo09.mongodb.net/";
async function deleteAllData() {
   try {
      const client = await MongoClient.connect(url);
      const db = client.db("T14");
      const collection = db.collection("mintaKollekcio");

      const result = await collection.deleteMany();

      console.log("Deleted All.", result.deletedCount);
      client.close();
   } catch (error) {
      console.error("Hiba történt a collection creation közben.", error);
   }
}

deleteAllData();
