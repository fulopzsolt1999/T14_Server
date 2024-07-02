import {MongoClient} from "mongodb";
const url = "mongodb+srv://fulopzsolt1999:qwe123@t14-fzs.cihzo09.mongodb.net/";
async function readFirstData() {
   try {
      const client = await MongoClient.connect(url);
      const db = client.db("T14");
      const collection = db.collection("mintaKollekcio");
      const firstData = await collection.findOne();
      console.log("Első dokumentum(FULL):", firstData);
      console.log("Neve:", firstData.nev);
      console.log("Kora:", firstData.kor);
      console.log("Fizetése:", firstData.fizetes);
      console.log("Beosztása:", firstData.beosztas);
      client.close();
   } catch (error) {
      console.error("Error.", error);
   }
}

readFirstData();
