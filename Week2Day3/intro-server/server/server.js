const express = require("express")

const app = express()
// console.log(express())


// 
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );




//!===========Routes ===========
// req is shorthand for request
// res is shorthand for response

//? =========== READ ALL ==========

app.get("/api/users", (req, res) => {
    res.json(users)
    
});

//? =========== CREATE ==========

app.post("/api/users", (req, res) => {
    users.push(req.body)
    res.json({status:"Mrigel"})
})

app.listen(5000,()=>{console.log(">>>> Server is up and running on PORT 5000 and ready for your REQest and RESponce ")})