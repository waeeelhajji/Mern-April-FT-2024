const express = require("express")

const app = express()

//=== MIDDLEWARE
app.use( express.json() );
app.use(express.urlencoded({ extended: true }));

const AllRoutes = require("./routes/users.routes")
console.log("=====>", AllRoutes)
AllRoutes(app)

app.listen(5000,()=>{console.log(">>>> Server is up and running on PORT 5000 and ready for your REQest and RESponce ")})
