const express = require("express")
const app = express();
const PORT = process.env.PORT || 3050;

app.get("/", (req, res) =>{
    res.send("I lik turtles!")
})

app.listen(PORT, function(){
    console.log("listen port " + PORT)
})