import express from "express";
import bodyParser from "body-parser";
import { router as noteRouter } from "./modules/note/note.controller.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const mongodbUser = process.env.MONGODB_USERNAME;
const mongodbPassword = process.env.MONGODB_PASSWORD;
const mongodbClusterName = process.env.MONGODB_CLUSTER_NAME;
const databaseName = "note-application";
const mongodbUri = `mongodb+srv://${mongodbUser}:${mongodbPassword}@${mongodbClusterName}/${databaseName}?retryWrites=true&w=majority`;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(noteRouter);
app.listen(3000, async () => {
  console.log("Server start at : http://localhost:3000");
  mongoose.set("strictQuery", true);
  await mongoose.connect(mongodbUri);
});
