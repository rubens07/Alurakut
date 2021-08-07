const express = require("express");
const app = express();
const db = require("./database");

const HTTP_PORT = 3003


app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`);
});

app.get("/", (req, res) => {
    res.json({"status": 200, "message": "OK"});
    // res.send("Hello World!");
});

app.get('/api/communitys', (req, res) => {
    const query = "select * from community";

    db.all(query, (err, rows) =>{
        if (err) {
            console.error(err.message);
            res.status(400).json({
                "error": err.message,
                "data": []
            });
            return;
        } else{
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
            .status(200)
            .json({
                "message": "success",
                "data": rows
            });
        }
    });
});