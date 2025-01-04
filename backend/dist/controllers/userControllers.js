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
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.registerUser = void 0;
const server_1 = require("../server");
// dotenv.config();
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const client = yield server_1.userDatabasePool.connect();
    try {
        yield client.query("INSERT INTO users(username, password) VALUES ($1, $2)", [username, password]);
        res.json(200);
    }
    catch (error) {
        console.log("error registering user.");
    }
    finally {
        client.release();
    }
});
exports.registerUser = registerUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const client = yield server_1.userDatabasePool.connect();
    const result = yield client.query("SELECT * FROM users WHERE username = $1 AND password = $2", [username, password]);
    if (result.rows.length === 0) {
        res.json(401);
    }
    else {
        res.json(200);
    }
});
exports.login = login;
// export default registerUser;
