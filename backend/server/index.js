require('dotenv').config();

const express = require("express");
const mongodb = require("mongodb");

const PORT = process.env.PORT || 3001;
const app = express();

const MongoClient = mongodb.MongoClient;
// const url = "mongodb://localhost:27017/inventory";
const url = `mongodb://${process.env.REACT_APP_MONGO_USER}:${encodeURIComponent(process.env.REACT_APP_MONGO_PASS)}@127.0.0.1:27017/inventory?authSource=inventory`;

MongoClient.connect(url).then(client => {
    console.log("MongoDB connection successful.");

    const dbo = client.db("inventory");
    dbo.collection("items").insertOne({ name: "Item1", quantity: 100 }).then(res => {
        console.log("1 document inserted");
        client.close();
    }).catch(err => {
        console.error("Insert error: ", err);
        client.close();
    });
}).catch(err => {
    console.error("Connection error: ", err);
});


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});