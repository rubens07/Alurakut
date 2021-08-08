const db = require("database");

export default async function (req, res) {
    if (req.method === 'GET') {
        const query = "select * from community";
        
        db.all(query, (err, rows) =>{
            if (err) {
                // log apresentado apenas no servidor
                console.error(err.message);
                res.status(400).json({
                    "error": err.message,
                    "data": []
                });
                return;
            } else{
                const items = rows.map((item) => {
                    return {title: item.name, image: item.image}
                });
                res.status(200)
                .json({
                    "message": "success",
                    "data": items
                });
            }
        });
    } else if (req.method === 'POST'){
        const query = "insert into community (name, image) values (?,?)"
        const {title, image} = req.body;

        db.run(query, [title, image], (err, result) => {
            if (err) {
                // log apresentado apenas no servidor
                console.error(err.message);
                res.status(400).json({
                    "error": err.message,
                });
            } else{
                res.status(200)
                .json({
                    "message": "success",
                });
            }
        });
    } else {
        res.status(405)
        .json({
            "message": "Method Not Allowed",
            "data": []
        })
    }
}
