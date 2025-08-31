const express = require('express');
const { get } = require('http');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static("frontend/public"));
// app.use(express.static(path.join(__dirname, "../public")));

app.post('/auth/signin', (req, res) => {
    const {email, password} = req.body;
});

app.get("/api", (req, res) => {
     res.json({message: "Hello from Backend"});
})

app.get('/{*any}', (req, res) => {
    res.sendFile(path.resolve("frontend/public", "index.html"));
})

app.listen(port, () => {
    console.log(`Server started on port`);
});