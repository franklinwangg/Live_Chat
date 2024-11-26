import {Request, Response} from "express";
import {Client} from 'pg';
import dotenv from 'dotenv';

export const sendFriendRequest = async(req : Request, res : Response) => {

    const userId : string = req.body.userId;
    const friendId : string = req.body.friendId;

    console.log("friend request sent , userId : ", userId, ", friendId : ", friendId);

    
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
        const query1 = 'INSERT INTO friends (userId, friendId) VALUES ($1, $2)';
        const values1 = [userId, friendId];

        const query2 = 'INSERT INTO friends (userId, friendId) VALUES ($1, $2)';
        const values2 = [friendId, userId];

        await client.query(query1, values1); // Execute the query
        await client.query(query2, values2); // Execute the query

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