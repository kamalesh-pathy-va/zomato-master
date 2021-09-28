require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";

//API
import Auth from "./API/Auth";

//Database
import ConnectDB from "./database/connection";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());

zomato.use("/auth", Auth);

zomato.get("/", (req, res) => res.json({message: "Setup Success"}));

zomato.listen(2610, () => ConnectDB().then(() => console.log("Server is up and running @2610 DB is connected.")).catch(() => console.log("DBconnection failed")));