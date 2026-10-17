import { Router } from "express";
import { createAtividade } from "../controllers/atividadesController.js";

const atividadesRouter = Router();

atividadesRouter.post("/", createAtividade);

export default atividadesRouter;