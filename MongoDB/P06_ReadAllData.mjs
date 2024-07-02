import {MongoClient} from "mongodb";
const url = "mongodb+srv://fulopzsolt1999:qwe123@t14-fzs.cihzo09.mongodb.net/";
async function readFirstData() {
   try {
      const client = await MongoClient.connect(url);
      const db = client.db("T14");
      const collection = db.collection("mintaKollekcio");
      const allData = await collection.find().toArray();
      console.log("Összes Adat:", allData);
      client.close();
   } catch (error) {
      console.error("Error.", error);
   }
}

readFirstData();
