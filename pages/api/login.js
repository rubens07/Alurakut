export default async function (req, res) {
    if (req.method === 'POST'){
        res.status(200)
        .json({
            "message": "success",
            "token": "912ec803b2ce49e4a541068d495ab570"
        });
    } else {
        res.status(405)
        .json({
            "message": "Method Not Allowed",
        })
    }
}
