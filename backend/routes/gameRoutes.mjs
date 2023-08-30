import express from "express";
import { clearGame, findGame, updateGame } from "../controllers/gameControllers.mjs";

const router = express.Router();

router.get("/", findGame);
router.post("/", updateGame);
router.post("/clear", clearGame)


export default router;
