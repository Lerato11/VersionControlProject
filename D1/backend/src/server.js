const express = require('express');
const { get } = require('http');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());

// app.use(express.static(path.join(__dirname, "../public")));

app.post('/auth/signin', (req, res) => {
    const {email, password} = req.body;

    console.log("Sign in attempt:", email);

    // demo success
    res.json({
        success: true,
        message: "Signed in successfully (stub)",
        user: { 
            id: 1, 
            email 
        },

        token: "sni@42sm$i*1", // for auth
    });
});

app.post("/auth/signup", (req, res) => {
  const { firstName, lastName, email, username, phoneNumber, company, addressLine1, addressLine2, password } = req.body;
  console.log("New user sign up:", req.body);

  // Respond with dummy user + fake token
  res.json({
    success: true,
    message: "User registered successfully",
    user: { id: 1, firstName, lastName, email, username, phoneNumber, company, addressLine1, addressLine2 },
    token: "cn3io4@m4!2*2",
  });
});

app.use(express.static("frontend/public"));


app.get("/api", (req, res) => {
     res.json({message: "Hello from Backend"});
})

app.get('/{*any}', (req, res) => {
    res.sendFile(path.resolve("frontend/public", "index.html"));
})

app.listen(port, () => {
    console.log(`Server started on port`);
});