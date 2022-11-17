import express, { json } from "express";
import morgan from "morgan";
//Routes
import clientRoutes from "../app/routes/clients.route";
import DetailsRoutes from "../app/routes/invoice_details.route";
import InvoicesRoutes from "../app/routes/invoices.route";
import ProductsRoutes from "../app/routes/product.route";
import InvoiceRoutes from "../app/routes/invoice.route";

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