const express = require("express")
const app = express();
const path = require("path")
const cors = require('cors');



app.use(cors())
app.use(express.static("client/build"))

console.log("aaa")

app.get("/front",(req,res)=>{

    res.sendFile(path.resolve(__dirname,"client","build","index.html"))

})

app.use("/api", (req, res) => {

    console.log("in server ====");

    const content = {
        date:Date(),
        port:`backend port  ${process.env.PORT||80}`
    }


    res.header(200).send(content)


})


app.listen(process.env.PORT || 80,()=>{console.log("===server started",process.env.PORT||80)})