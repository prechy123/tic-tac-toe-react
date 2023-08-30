import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import "dotenv/config"

const app = express();

app.use(
  cors({
    origin: "https://localhost:3000",
  })
);

app.use(express.json())

mongoose.connect(process.env.MONGODB)
.then(() => {
    app.listen(4000, () => {
        console.log("Server is running at port 4000")
    })
})
.catch((err) => {
    console.log(err)
})