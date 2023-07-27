import mongoose, { model,Document } from "mongoose"
interface Userschema{
    name:{type:string},
    age:{type:number},
    sex:{type:boolean},
    email:{type:string},
}

interface myUser extends Userschema , Document{}
const mainUser = new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    sex:{type:Boolean},
    email:{type:String},

})

const UserModel = model<myUser>("User", mainUser)
export default UserModel