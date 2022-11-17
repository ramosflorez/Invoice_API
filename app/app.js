import express, { json } from "express";
import morgan from "morgan";
//Routes
import clientRoutes from "../app/routes/clients.route.js";
import DetailsRoutes from "../app/routes/invoice_details.route.js";
import InvoicesRoutes from "../app/routes/invoices.route.js";
import ProductsRoutes from "../app/routes/product.route.js";
import InvoiceRoutes from "../app/routes/invoice.route.js";

const app=express();
var cors = require('cors');

app.use(cors());

//settings
app.set("port",process.env.PORT || 3005);

//middlewares

app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/clients",clientRoutes);
app.use("/api/details",DetailsRoutes);
app.use("/api/invoice",InvoicesRoutes);
app.use("/api/products",ProductsRoutes);
app.use("/api/invoice_one",InvoiceRoutes);

export default app;