import { Router } from "express";

import {
  getHeroes,
  createHero,
  updateHero,
  deleteHero,
} from "../controllers/hero.controller.js";

export const heroRouter = Router();
heroRouter.get("/", getHeroes);
heroRouter.post("/", createHero);
heroRouter.put("/:id", updateHero);
heroRouter.delete("/:id", deleteHero);
