import { Router } from "express";
import { methods as InvoiceController } from "../controllers/invoice.controller.js";

const router=Router();
router.get("/:invoice_ID",InvoiceController.getInvoice);


export default router;