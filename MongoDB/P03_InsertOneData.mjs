import {MongoClient} from "mongodb";
const url = "mongodb+srv://fulopzsolt1999:qwe123@t14-fzs.cihzo09.mongodb.net/";
async function insertData() {
   try {
      const client = await MongoClient.connect(url);
      const db = client.db("T14");
      const newData = {
         nev: "Békés Csaba",
         kor: 63,
         fizetes: 190000,
         beosztas: "takarító",
      };
      await db.collection("mintaKollekcio").insertOne(newData);
      console.log("Data inserted.");
      client.close();
   } catch (error) {
      console.error("Hiba történt a collection creation közben.", error);
   }
}

insertData();
