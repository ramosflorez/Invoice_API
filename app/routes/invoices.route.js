import { Router } from "express";
import { methods as InvoicesController } from "../controllers/invoices.controller";

const router=Router();
router.get("/",InvoicesController.getInvoices);
router.post("/",InvoicesController.addInvoice);

export default router;