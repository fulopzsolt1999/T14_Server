// npm init -y
// npm install express
// npm install mongoose
// npm install body-parser
// npm install dotenv

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";
import "dotenv/config.js";
import {appendFile} from "fs";

const APP = express();
const PORT = 3000;

APP.use(bodyParser.urlencoded({extended: true}));
APP.use(bodyParser.json());

const URL = process.env.ATLAS_URL;
mongoose
   .connect(URL)
   .then(() => {
      console.log("MongoDB connection established");
   })
   .catch((err) => {
      console.log("MongoDB connection failed", err);
   });

const dolgozoMinta = new mongoose.Schema({
   nev: String,
   kor: Number,
   fizetes: Number,
   beosztas: String,
});

const Dolgozo = mongoose.model("Dolgozo", dolgozoMinta, "dolgozok");

// Alapútvonal beállítása
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
APP.get("/", (req, res) => {
   res.sendFile(__dirname + "/index.html");
});

APP.post("/ujdolgozo", async (req, res) => {
   const ujDolgozo = new Dolgozo({
      nev: req.body.nev,
      kor: req.body.kor,
      fizetes: req.body.fizetes,
      beosztas: req.body.beosztas,
   });
   try {
      await ujDolgozo.save();
      res.redirect("/datas");
   } catch (error) {
      console.log(error);
   }
});

APP.get("/dolgozolekerdezes", async (req, res) => {
   try {
      const dolgozok = await Dolgozo.find().sort({fizetes: 1});
      res.json(dolgozok);
   } catch (error) {
      res.status(500).send(error);
   }
});

APP.get("/datas", async (req, res) => {
   try {
      res.sendFile(__dirname + "/datas.html");
   } catch (error) {
      console.log(error);
   }
});

APP.listen(PORT, () => {
   console.log(`Server started on port ${PORT}`);
});
