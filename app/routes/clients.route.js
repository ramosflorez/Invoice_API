import { Router } from "express";
import { methods as clientController } from "../controllers/clients.controller";

const router=Router();
router.get("/",clientController.getClients);
router.post("/",clientController.addClient);

export default router;