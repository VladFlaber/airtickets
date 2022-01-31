const express =require("express")
const config = require("config")
const mongoose = require("mongoose")
const app =express();

app.use("/api/auth",require("./routes/auth.routes"))


const PORT=config.get('port')||5000

async  function start(){
    try{
        await mongoose.connect(config.get("mongoUri"),{
        useNewUrlParser:true,
            useUnifiedTopology:true,

        })
        app.listen(PORT,()=>console.log(`app has been started ${PORT}`));
    }
    catch (e){
        console.log("SERVER error" , e.message);
        process.exitCode(1);
    }
}
start();
