"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // extract the user's username and password from the request
    // put it into the database
    console.log("BODY : ", req.body);
    const username = req.body.username;
    const password = req.body.password;
    const client = new pg_1.Client({
        host: process.env.PSQL_HOST,
        port: parseInt(process.env.PSQL_PORT || "5432"),
        user: process.env.PSQL_USER,
        password: process.env.PSQL_PASSWORD,
        database: process.env.PSQL_DATABASE,
    });
    yield client.connect();
    try {
        // Insert the username and password into the 'users' table
        const query = 'INSERT INTO users (username, password) VALUES ($1, $2)';
        const values = [username, password];
        yield client.query(query, values); // Execute the query
        // Respond with a success message
        res.status(201).json({ message: "User registered successfully!" });
    }
    catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "An error occurred while registering the user." });
    }
    finally {
        // Close the database connection
        yield client.end();
    }
});
exports.registerUser = registerUser;
// export default registerUser;
