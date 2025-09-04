import express from "express"
const app = express()

require("dotenv").config()

const PORT = process.env.PORT


app.get("/" , (req,res)=>{
  return res.json({msg:"Welcome to the V1 of the btkit market app"})
}) 


app.listen(PORT , ()=>{
    console.log(`Your server is running on the port number ${PORT}`)
})