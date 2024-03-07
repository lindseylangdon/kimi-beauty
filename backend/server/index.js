const express = require("express");
const mongodb = require("mongodb");

const PORT = process.env.PORT || 3001;
const app = express();

const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/inventory";

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     console.log("Database connected!");
//     db.close();
//   });

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});