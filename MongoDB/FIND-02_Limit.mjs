import {MongoClient} from "mongodb";
const url = "mongodb+srv://fulopzsolt1999:uA83824571@t14-fzs.cihzo09.mongodb.net/";

async function Lekerdezes() {
   try {
      const client = await MongoClient.connect(url);
      const db = client.db("T14");
      const collection = db.collection("mintaKollekcio");

      const rendezesBeallitasa = {fizetes: -1};
      const result = await collection.find().sort(rendezesBeallitasa).limit(3).toArray();

      console.log(result);
      client.close();
   } catch (error) {
      console.error("Hiba történt.", error);
   }
}

Lekerdezes();
