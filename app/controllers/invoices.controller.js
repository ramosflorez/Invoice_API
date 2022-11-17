import {getConnection} from "../../config/connection.js";
const getInvoices= async(req,res)=>{
    try{

        const connection= await getConnection();
        const result=await connection.query("SELECT i.Invoice_ID,C.Client_name,i.date_, subtotal,discount,total from invoice i, client_ c where i.Client_ID=c.Client_ID");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.menssage);
    }

};
const addInvoice= async(req,res)=>{
    try{
        
        const {  Client_ID, date_, discount,subtotal,total}  = req.body;
        if( Client_ID===undefined|| date_===undefined ||discount===undefined){
            res.status(400).json({message:"Bad request. Please fill all field."});
        }
        const invoice={Client_ID, date_, discount,subtotal,total} ;
        const connection= await getConnection();
        const result=await connection.query("INSERT INTO invoice SET ? ",invoice,function(error,results){
            if (error) throw error
            
            res.json(results.insertId);
        });

    }catch(error){
        res.status(500);
        res.send(error.menssage);
    }
   
};



export const methods={
    getInvoices,
    addInvoice
}