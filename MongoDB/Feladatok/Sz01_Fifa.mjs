import {MongoClient} from "mongodb";
const url = "mongodb+srv://fulopzsolt1999:uA83824571@t14-fzs.cihzo09.mongodb.net/";

async function fifaExercise() {
   try {
      const client = await MongoClient.connect(url);
      const db = client.db("T14");
      const collection = db.collection("Fifa");
      const fifaObject = fifaArrayToObject();

      //await db.collection("Fifa").insertMany(fifaObject);

      const allTeams = await db
         .collection("Fifa")
         .find({}, {projection: {_id: 0, team: 1, rank: 1}})
         .sort({score: -1})
         .toArray();

      const bestThreeTeam = await db.collection("Fifa").find().sort({score: -1}).limit(3).toArray();

      const rankUnchanged = await db
         .collection("Fifa")
         .find({change: 0}, {projection: {_id: 0, team: 1}})
         .toArray();

      const scoreMoreThan1600 = await db
         .collection("Fifa")
         .find({score: {$gt: 1600}}, {projection: {_id: 0, team: 1, score: 1}})
         .toArray();

      const biggestRankChange = await db
         .collection("Fifa")
         .find({}, {projection: {_id: 0, team: 1}})
         .sort({change: -1})
         .limit(1)
         .toArray();

      logAllResults(allTeams, bestThreeTeam, rankUnchanged, scoreMoreThan1600, biggestRankChange);

      client.close();
   } catch (error) {
      console.error("Error", error);
   }
}

fifaExercise();

function fifaArrayToObject() {
   const fifaArray = [
      "Anglia;4;0;1662",
      "Argentína;10;0;1614",
      "Belgium;1;0;1752",
      "Brazília;3;-1;1719",
      "Chile;17;-3;1576",
      "Dánia;14;-1;1584",
      "Franciaország;2;1;1725",
      "Hollandia;13;3;1586",
      "Horvátország;8;-1;1625",
      "Kolumbia;9;-1;1622",
      "Mexikó;12;0;1603",
      "Németország;16;-1;1580",
      "Olaszország;15;1;1583",
      "Peru;19;0;1551",
      "Portugália;5;1;1643",
      "Spanyolország;7;2;1631",
      "Svájc;11;0;1604",
      "Svédország;18;0;1560",
      "Szenegál;20;0;1546",
      "Uruguay;6;-1;1639",
   ];
   const fifaObject = [];
   for (const line of fifaArray) {
      fifaObject.push({
         team: line.split(";")[0],
         rank: Number(line.split(";")[1]),
         change: Number(line.split(";")[2]),
         score: Number(line.split(";")[3]),
      });
   }
   return fifaObject;
}

function logAllResults(
   allTeams,
   bestThreeTeam,
   rankUnchanged,
   scoreMoreThan1600,
   biggestRankChange
) {
   console.log(allTeams);
   console.log(bestThreeTeam);
   console.log(rankUnchanged);
   console.log(scoreMoreThan1600);
   console.log(biggestRankChange);
}
