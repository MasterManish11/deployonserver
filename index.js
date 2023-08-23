require('dotenv').config()
const express =require("express")
const bodyParser = require("body-parser")
const app = express();
const cors = require("cors")
const port = process.env.PORT || 3000
const production = require("./routes/production.js")
app.use(bodyParser.json())

app.use(cors({
    origin: "*"
}))

// GET Request 

app.get("/",(req,res)=>{
    res.json("app is working")
});
app.get("/production",production)
    

app.listen(port, ()=> 
console.log(`Express server is running on port ${port}`)
)

