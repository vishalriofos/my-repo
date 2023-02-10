const express = require("express")
const app = express()

const port = process.env.PORT || 2503
app.listen(port, () => console.log(`App is listening on ${port}`))


app.get("/", (req, res) => {
    res.send("Hoiaa");
})