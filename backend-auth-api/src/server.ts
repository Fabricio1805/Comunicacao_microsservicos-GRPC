import "dotenv/config";
import express, { Express } from "express";

const server: Express = express();

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.info(`server is running in port ${PORT}`);
});

