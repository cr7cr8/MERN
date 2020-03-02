const express = require("express")
const app = express();

const cors = require('cors');



app.use(cors())
app.use("/", (req, res) => {

    console.log("in server ====");

    const content = {
        date:Date(),
        port:`backend port  ${process.env.PORT||80}`
    }


    res.header(200).send(content)


})


app.listen(process.env.PORT || 80,()=>{console.log("===server started",process.env.PORT||80)})