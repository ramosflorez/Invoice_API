import { Router } from "express";
import { methods as clientController } from "../controllers/clients.controller.js";

const router=Router();
router.get("/",clientController.getClients);
router.post("/",clientController.addClient);
router.post("/getclient",clientController.getClient);

export default router;