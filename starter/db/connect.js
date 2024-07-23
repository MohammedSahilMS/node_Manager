const mongoose = require("mongoose")

const connectionString = "mongodb+srv://sahilms750:1234@nodetaskmanager.6xl9c07.mongodb.net/?retryWrites=true&w=majority&appName=NodeTaskManager"

mongoose.connect(connectionString)
    .then(() => {
        console.log("Database Connected Successfully ...");
    })
    .catch((err) => {
        console.log(err.message);
    })