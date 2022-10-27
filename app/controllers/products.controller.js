import {getConnection} from "../../config/connection";
const getProducts= async(req,res)=>{
    try{
        const connection= await getConnection();
        const result=await connection.query("SELECT * from product");
        
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.menssage);
    }

};

const addProduct= async(req,res)=>{
    try{
        
        const { Product_ID, Product_name, Product_descr, Price }  = req.body;
        if(Product_ID===undefined || Product_name===undefined|| Product_descr===undefined|| Price===undefined){
            res.status(400).json({message:"Bad request. Please fill all field."});
        }
        const product={ Product_ID, Product_name, Product_descr, Price } ;
        const connection= await getConnection();
        const result=await connection.query("INSERT INTO product SET ? ",product);

        const lastId=await connection.query("SELECT LAST_INSERT_ID()");
        res.json({message:"product created successfully", id:lastId});

    }catch(error){
        res.status(500);
        res.send(error.menssage);
    }
   
};

export const methods={
    getProducts,
    addProduct
}