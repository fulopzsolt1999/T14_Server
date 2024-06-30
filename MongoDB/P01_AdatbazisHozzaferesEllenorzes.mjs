import {MongoClient} from "mongodb";
const url = "mongodb+srv://fulopzsolt1999:<pw>@t14-fzs.cihzo09.mongodb.net/";
async function ellenorzo() {
   try {
      const client = await MongoClient.connect(url);
      console.log("Adatbazis csatlakozva");
      client.close();
   } catch (error) {
      console.error("Hiba történt a csatlakozás közben.", error);
   }
}

ellenorzo();
