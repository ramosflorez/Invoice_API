import {getConnection} from "../../config/connection.js";

const getDetails=async(req,res)=>{
    try{

        const invoice_ID=parseInt(req.params.invoice_ID);
        const connection= await getConnection();
        const result=await connection.query(`SELECT i.Invoice_ID, p.Product_name, p.Product_ID,p.Price ,i.Quantity,i.Total from invoice_details i,product p where i.Invoice_ID=${invoice_ID} and p.Product_ID=i.Product_ID`);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.menssage);
    }

};
const addDetails= async(req,res)=>{
    try{
        const invoice_ID  = req.params.invoice_ID;
        var {items}=req.body;
        const connection= await getConnection();
        console.log (items);
        let products=JSON.parse(items)

        products.forEach(async function(element) {

            var Product_ID=element.product.Product_ID;
            var Quantity=element.quantity;
            var price=element.product.Price;
            var total= await price*Quantity;
            parseFloat(total);
            var details={invoice_ID, Product_ID,Quantity,total};
            const result=await connection.query("INSERT INTO invoice_details SET ? ",details);

            
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