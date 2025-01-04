"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDatabasePool = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const pg_1 = require("pg");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const friendRoutes_1 = __importDefault(require("./routes/friendRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
const PORT = 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
dotenv_1.default.config();
app.use("/userRoutes", userRoutes_1.default);
app.use("/friendRoutes", friendRoutes_1.default);
// pools
const port = process.env.PSQL_PORT ? parseInt(process.env.PSQL_PORT) : 5432; // Default to 5432 if undefined
const userDatabasePool = new pg_1.Pool({
    host: process.env.PG_HOST, // Database host (could be 'localhost' or an IP address)
    port: port, // Default PostgreSQL port
    user: process.env.PG_USERNAME, // Your PostgreSQL username
    password: process.env.PG_PASSWORD, // Your PostgreSQL password
    database: process.env.PG_DATABASE, // The database you're connecting to
    max: 10, // Max number of connections in the pool
});
exports.userDatabasePool = userDatabasePool;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
