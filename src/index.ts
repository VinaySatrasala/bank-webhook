import express from "express";
const app = express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.json({
        "msg" : "Hello"
    })
});

app.listen(3003);