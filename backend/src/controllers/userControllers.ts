import {Request, Response} from "express";
import {Client} from 'pg';
import dotenv from 'dotenv';

dotenv.config();


export const registerUser = async (req : Request, res : Response) => {
    // extract the user's username and password from the request
    // put it into the database

    console.log("BODY : ", req.body);

    const username : string = req.body.username;
    const password : string = req.body.password;
    
    const client = new Client({
        host: process.env.PSQL_HOST,
        port: parseInt(process.env.PSQL_PORT || "5432"),
        user: process.env.PSQL_USER,
        password: process.env.PSQL_PASSWORD,
        database: process.env.PSQL_DATABASE,
    });

    await client.connect();

    try {
        // Insert the username and password into the 'users' table
        const query = 'INSERT INTO users (username, password) VALUES ($1, $2)';
        const values = [username, password];

        await client.query(query, values); // Execute the query

        // Respond with a success message
        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "An error occurred while registering the user." });
    } finally {
        // Close the database connection
        await client.end();
    }
};

// export default registerUser;