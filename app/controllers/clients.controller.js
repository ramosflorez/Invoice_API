import { request } from "express";
import {getConnection} from "../../config/connection"
const getClients= async(req,res)=>{
    try{
        const connection= await getConnection();
        const result=await connection.query("SELECT * from client_");
        console.log(result);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.menssage);
    }
   
};

const addClient= async(req,res)=>{
    try{
        const { Client_name, Point_of_Contact, Phone_Number, Email }  = req.body;
        if(Client_name===undefined || Point_of_Contact===undefined|| Phone_Number===undefined|| Email===undefined){
            res.status(400).json({message:"Bad request. Please fill all field."});
        }
        const client={ Client_name, Point_of_Contact, Phone_Number, Email } ;
        const connection= await getConnection();
        const result=await connection.query("INSERT INTO client_ SET ? ",client);
        res.json({message:"Client created successfully"});

    }catch(error){
        res.status(500);
        res.send(error.menssage);
    }
   
};


export const methods={
    getClients,
    addClient
}