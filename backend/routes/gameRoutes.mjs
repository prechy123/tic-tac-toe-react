import express from "express";
import { findGame, updateGame } from "../controllers/gameControllers.mjs";

const router = express.Router();

router.get("/", findGame);
router.post("/update", updateGame);

export default router;
