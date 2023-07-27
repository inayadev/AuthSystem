import mongoose from "mongoose"
const DBurl = "mongodb://0.0.0.0:27017/CRUD_DB"
export const DBCONNECTION = async()=>{
    try {
        const db = await mongoose.connect(DBurl)
        console.log(`database is connected to server on ${db.connection.host}`)
    } catch (error) {
        console.log("error occurs in connection to database",error)
    }

}

