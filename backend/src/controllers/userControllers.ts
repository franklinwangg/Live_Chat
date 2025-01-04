import {Request, Response} from "express";
import {Client} from 'pg';
import { databasePool } from "../server";
// import dotenv from 'dotenv';
import bcrypt from 'bcrypt'; // Ensure bcrypt is installed for password hashing


// dotenv.config();

export const registerUser = async (req : Request, res : Response) => {

    const username : string = req.body.username;
    const password : string = req.body.password;
    
    const client = await databasePool.connect();

    try {
        await client.query("INSERT INTO users(username, password) VALUES ($1, $2)", [username, password]);

        res.json(200);
    }
    catch(error) {
        console.log("error registering user.");
    }
    finally {
        client.release();
    }
};

export const login = async (req : Request, res : Response) => {
    const {username, password} = req.body;

    const client = await databasePool.connect();
    const result = await client.query("SELECT * FROM users WHERE username = $1 AND password = $2", [username, password]);
    if(result.rows.length === 0) {
        res.json(401);
    }
    else {
        res.json(200);
    }
};


// export default registerUser;