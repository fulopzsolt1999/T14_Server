import {MongoClient} from "mongodb";
const url = "mongodb+srv://fulopzsolt1999:<pw>@t14-fzs.cihzo09.mongodb.net/";
async function readSearchedData() {
   try {
      const client = await MongoClient.connect(url);
      const db = client.db("T14");
      const collection = db.collection("mintaKollekcio");
      const searchMinta = {nev: "Meg Győző"};
      const allData = await collection.find(searchMinta).toArray();
      console.log(allData);
      client.close();
   } catch (error) {
      console.error("Error.", error);
   }
}

readSearchedData();
