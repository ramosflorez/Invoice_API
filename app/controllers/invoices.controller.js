import {getConnection} from "../../config/connection";
const getInvoices= async(req,res)=>{
    try{

        const connection= await getConnection();
        const result=await connection.query("SELECT C.Client_name,i.date_, subtotal,discount,total from invoice i, client_ c where i.Client_ID=c.Client_ID");
        console.log(result);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.menssage);
    }

};
const addInvoice= async(req,res)=>{
    try{
        
        const {  Client_ID, date_, discount}  = req.body;
        if( Client_ID===undefined|| date_===undefined ||discount===undefined){
            res.status(400).json({message:"Bad request. Please fill all field."});
        }
        const invoice={Client_ID, date_, discount,subtotal,total} ;
        const connection= await getConnection();
        const result=await connection.query("INSERT INTO invoice SET ? ",invoice);
        const lastId=await connection.query("SELECT LAST_INSERT_ID()");
        console.log(result);
        res.json({message:"invoice created successfully", id:lastId});

    }catch(error){
        res.status(500);
        res.send(error.menssage);
    }
   
};



export const methods={
    getInvoices,
    addInvoice
}