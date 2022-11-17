import { Router } from "express";
import { methods as ProductsController } from "../controllers/products.controller.js";
const router=Router();
router.get("/",ProductsController.getProducts);
router.post("/",ProductsController.addProduct);

export default router;