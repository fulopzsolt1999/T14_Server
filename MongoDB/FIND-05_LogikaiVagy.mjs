import {MongoClient} from "mongodb";
const url = "mongodb+srv://fulopzsolt1999:qwe123@t14-fzs.cihzo09.mongodb.net/";
async function Lekerdezes() {
   try {
      const client = await MongoClient.connect(url);
      const db = client.db("T14");
      const collection = db.collection("mintaKollekcio");

      const result = await collection
         .find({
            $or: [{beosztas: "Irodai Titkár"}, {beosztas: "Üzem Orvos"}],
         })
         .toArray();

      console.log(result);
      client.close();
   } catch (error) {
      console.error("Hiba történt.", error);
   }
}

Lekerdezes();
