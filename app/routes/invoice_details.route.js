import { Router } from "express";
import { methods as DetailsController } from "../controllers/invoice_details.controller";


const router=Router();
router.get("/:invoice_ID",DetailsController.getDetails);
router.post("/:invoice_ID",DetailsController.addDetails);

export default router;