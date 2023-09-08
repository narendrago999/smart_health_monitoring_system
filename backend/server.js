const app = require("./app")
const socketio = require("socket.io")
const dotenv = require("dotenv")
const connectDatabase = require("./config/database")
const http =require("http")

//Handling Uncaught Exception

process.on("uncaughtException", err =>{
    console.log(`Error : ${err.message}`);
    console.log("sutting down the server due to Uncaught Exception");
    process.exit(1);
})
// Config

dotenv.config({path:"backend/config/config.env"});
const httpServer = http.createServer(app)


// connecting to database
connectDatabase()





const server =  httpServer.listen(process.env.PORT,()=>{
    console.log(`server is working on https://localhost:${process.env.PORT}`);
})
const socketServer = new socketio.Server(server,{
    cors: {
        origin: '*',
    }
})
let timeChange= new Date()
const data = [
    { name: 1, x:Math.random()*10, y: Math.random()*10},

]

socketServer.on("connection",(socket)=>{
    console.log("CONNECTED")
    if(timeChange){
        clearInterval(timeChange)
        if(data.length > 10){
            data.reverse().pop()
            data.reverse()
        }
        data.push({ name: data[data.length-1] +1 , x: Math.random()*10, y: Math.random()*10})
        setInterval(()=>socket.emit("message", data),1000)
    }
})
// Unhandled Promise Rejection

process.on("unhandledRejection", err =>{
    console.log(`Error : ${err.message}`);
    console.log("sutting down the server due to unhandled Promise Rejection");

    server.close(()=>{
        process.exit(1);
    })
})