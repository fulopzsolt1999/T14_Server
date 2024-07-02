import {MongoClient} from "mongodb";
const url = "mongodb+srv://fulopzsolt1999:qwe123@t14-fzs.cihzo09.mongodb.net/";
async function objektumExercise() {
   try {
      const client = await MongoClient.connect(url);
      const db = client.db("T14");
      const collection = db.collection("mintaKollekcio");

      var newData = {
         nev: "Szikla Szilárd",
         kor: 60,
         fizetes: 5000000,
         beosztas: "Tulajdonos",
      };

      await db.collection("mintaKollekcio").insertOne(newData);
      await db
         .collection("mintaKollekcio")
         .updateOne({beosztas: "Marketing Manager"}, {$set: {fizetes: 1000000}});
      const result = await collection
         .find({}, {projection: {_id: 0, nev: 1, beosztas: 1, kor: 1}})
         .sort({kor: 1})
         .limit(3)
         .toArray();

      console.log(result);
      client.close();
   } catch (error) {
      console.error("Hiba történt a collection creation és.", error);
   }
}

objektumExercise();
