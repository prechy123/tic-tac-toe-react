import express from "express";
import {
  clearGame,
  findGame,
  findWinner,
  updateGame,
  updateWinner,
} from "../controllers/gameControllers.mjs";

const router = express.Router();

router.get("/", findGame);
router.post("/", updateGame);
router.post("/clear", clearGame);
router.get("/findWinner", findWinner)
router.post("/updateWinner", updateWinner);

export default router;
