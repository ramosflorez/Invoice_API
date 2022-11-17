import {getConnection} from "../../config/connection.js";
const getInvoice= async(req,res)=>{
    try{
        const invoice_ID=parseInt(req.params.invoice_ID);
        const connection= await getConnection();
        const result=await connection.query(`SELECT i.Invoice_ID,C.Client_name,i.date_, subtotal,discount,total from invoice i, client_ c where i.Client_ID=c.Client_ID AND i.Invoice_ID=${invoice_ID}`);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.menssage);
    }

};
export const methods={
    getInvoice
}