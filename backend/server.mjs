import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import router from "./routes/gameRoutes.mjs";

const app = express();

app.use(express.json());

app.use("/tictactoe", router);

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    app.listen(4000, () => {
      console.log("Server is running at port 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
