const express = require ("express")
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require ("./db/connect")
const mongoose = require("mongoose")


//middelware

app.use(express.json())


//ConnectinG DB

mongoose.connect(connectDB)
.then(() => {
    console.log("connected to db")
})
.catch((err) => {
    console.log("could not connect to db",err)
})

//routes

app.get("/hello",(req,res) => {
    res.send("Task Manager")
})

app.use("/api/v1/tasks", tasks)




const PORT = 3000

app.listen(PORT , () => {
    console.log(`Server is listening on port ${PORT}`);
})