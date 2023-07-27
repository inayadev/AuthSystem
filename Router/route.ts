import {Router} from "express"
import { DeleteUser, Register, getAll, getOne } from "../Controller/UserController"

const Allroute= Router()

Allroute.route("/getAllUsers").get(getAll)
Allroute.route("/getOne").get(getOne)
Allroute.route("/register").post(Register)
Allroute.route("/delete").delete(DeleteUser)

export default Allroute