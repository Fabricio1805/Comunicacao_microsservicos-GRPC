import express, { Express } from "express";
import "dotenv/config";

const server: Express = express();

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`server is runnig in port ${PORT}`);
});
