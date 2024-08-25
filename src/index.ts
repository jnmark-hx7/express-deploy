/**
 * !Important Main file for executing express app
 * WIP: Missing UI for uploading express app
 */
import express from "express";
import { join } from "path";
import file from "../app.config.json";

const app = express();

const _constant = {
  PORT: 8080,
  ABSOLUTE_PATH: join(__dirname, `../../_static/${file.folder_name}`),
};

app.use(express.static(_constant.ABSOLUTE_PATH));
app.listen(_constant.PORT, () => {
  console.log(`U are listening to PORT : ${_constant.PORT}`);
});
