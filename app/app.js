import express, { json } from "express";
import morgan from "morgan";
//Routes
import clientRoutes from "../app/routes/clients.route";
import DetailsRoutes from "../app/routes/invoice_details.route";
import InvoiceRoutes from "../app/routes/invoices.route";
import ProductsRoutes from "../app/routes/product.route";

const app=express();

//settings
app.set("port",4000);

//middlewares

app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/clients",clientRoutes);
app.use("/api/details",DetailsRoutes);
app.use("/api/invoice",InvoiceRoutes);
app.use("/api/products",ProductsRoutes);

export default app;