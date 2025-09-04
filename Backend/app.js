import express from "express"
const app = express()
import userAuth from "./Controller/userAuth.js"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.use("/v1/userauth" , userAuth)


app.get("/" , (req,res)=>{
  return res.json({msg:"Welcome to the V1 of the btkit market app"})
}) 


app.listen(PORT , ()=>{
    console.log(`Your server is running on the port number ${PORT}`)
})