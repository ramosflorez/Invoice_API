import { request } from "express";
import {getConnection} from "../../config/connection.js"
const getClients= async(req,res)=>{
    try{
        const connection= await getConnection();
        const result=await connection.query("SELECT * from client_");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.menssage);
    }
   
};

const addClient= async(req,res)=>{
    try{
        //el rol debe ir default client o costumer
        const role="client";
        
        const { Client_name,  password, Email }  = req.body;
        if(Client_name===undefined || password===undefined|| Email===undefined){
            res.status(400).json({message:"Bad request. Please fill all field."});
        }else{
            const client={ Client_name, role, password, Email } ;
            const connection= await getConnection();
     
            const result=await connection.query("INSERT INTO client_ SET ? ",client);
            res.json({message:"Client created successfully"});
    
        }
        
    }catch(error){
        res.status(500);
        res.send(error.menssage);
    }
   
};

const getClient= async(req,res)=>{
    try{
        
        const { Client_name,  password }  = req.body;
        
        if(Client_name===undefined || password===undefined){
            res.status(400).json({message:"Bad request. Please fill all field."});
        }
        
        const connection= await getConnection();
        const result=await connection.query(`SELECT Client_name, password from client_ where Client_name='${Client_name}' and password='${password}'`);       
        res.json(result);

    }catch(error){
        res.status(500);
        res.send(error.menssage);
        
    }
   
};


export const methods={
    getClients,
    addClient,
    getClient
}
