import express, {Application}from "express"
import { DBCONNECTION } from "./config/database";
import Allroute from "./Router/route";

const port: number = 2030;
const app:Application = express()
app.use(express.json())

// Initializing Routes
app.use("/api", Allroute)

// Initializing Database
DBCONNECTION()
app.listen(port, ()=>{
    console.log("")
    console.log("server is up and running")
})