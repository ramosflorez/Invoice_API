import {getConnection} from "../../config/connection";

const getDetails=async(req,res)=>{
    try{
        console.log("body",req.params);
        const invoice_ID=parseInt(req.params.invoice_ID);
        const connection= await getConnection();
        const result=await connection.query(`SELECT i.Invoice_ID, p.Product_name, i.Quantity,i.Total from invoice_details i,product p where i.Invoice_ID=${invoice_ID} and p.Product_ID=i.Product_ID`);
        console.log(result);
        res.json(result);
    }catch(error){
        console.log(error);
        res.status(500);
        res.send(error.menssage);
    }

};
const addDetails= async(req,res)=>{
    try{
        const invoice_ID  = req.params.invoice_ID;
        var products=req.body;
        const connection= await getConnection();
        
        products.forEach(async function(element) {
            var Product_ID=element.Product_ID;
            var Quantity=element.Quantity;
            var [price_query]=await connection.query(`Select Price from product where Product_Id=${Product_ID}`);
            var total= await price_query.Price*Quantity;
            parseFloat(total);
            var details={invoice_ID, Product_ID,Quantity,total};
            const result=await connection.query("INSERT INTO invoice_details SET ? ",details);
            console.log(details);

            
        });
        res.json({message:"Details created successfully"});        

    }catch(error){
        res.status(500);
        res.send(error.menssage);
    }
   
};

export const methods={
    getDetails,
    addDetails
}