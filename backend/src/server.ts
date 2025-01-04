import express from 'express';
import cors from 'cors';
import {Pool} from 'pg';
import userRoutes from "./routes/userRoutes";
import friendRoutes from "./routes/friendRoutes";
import dotenv from "dotenv";


const PORT:number = 5000;

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();


app.use("/userRoutes", userRoutes);
app.use("/friendRoutes", friendRoutes);

// pools
const port = process.env.PSQL_PORT ? parseInt(process.env.PSQL_PORT) : 5432;  // Default to 5432 if undefined

const databasePool = new Pool({
  host: process.env.PG_HOST,           // Database host (could be 'localhost' or an IP address)
  port: port,                          // Default PostgreSQL port
  user: process.env.PG_USERNAME,       // Your PostgreSQL username
  password: process.env.PG_PASSWORD,   // Your PostgreSQL password
  database: process.env.PG_DATABASE,          // The database you're connecting to
  max: 10,                    // Max number of connections in the pool
});

export {databasePool};

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});