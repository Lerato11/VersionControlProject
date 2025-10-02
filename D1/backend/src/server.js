const express = require('express');
const { get } = require('http');
const path = require('path');

const { dbConnect } =  require("../src/database");
const projectRoutes = require("./routes/projectsRoutes");
const feedRoutes = require("./routes/feedsRoutes");
const userRoutes = require("./routes/usersRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = 3000;

// const projectRoutes = require("./routes/projectsRoutes");

app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend/public")));

app.use("/api/projects", projectRoutes);
app.use("/api/feeds", feedRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


// app.post('/auth/signin', (req, res) => {
//     const {email, password} = req.body;

//     console.log("Sign in attempt:", email);

//     // demo success
//     res.json({
//         success: true,
//         message: "Signed in successfully (stub)",
//         user: { 
//             id: 2, 
//             email 
//         },

//         token: "sni@42sm$i*1", // for auth
//     });
// });

// app.post("/auth/signup", (req, res) => {
//   const { firstName, lastName, email, username, phoneNumber, company, addressLine1, addressLine2, password } = req.body;
//   console.log("New user sign up:", req.body);

//   // Respond with dummy user + fake token
//   res.json({
//     success: true,
//     message: "User registered successfully",
//     user: { id: 1, firstName, lastName, email, username, phoneNumber, company, addressLine1, addressLine2 },
//     token: "cn3io4@m4!2*2",
//   });
// });

app.use(express.static("frontend/public"));


app.get("/api", (req, res) => {
     res.json({message: "Hello from Backend"});
})


// app.use("/api/projects", projectRoutes);

app.get('/{*any}', (req, res) => {
    res.sendFile(path.resolve("frontend/public", "index.html"));
})

async function startServer() {
  try {
    await dbConnect();  // 👈 connect first
    console.log("✅ Connected to MongoDB");


    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
  }
}

startServer();


// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });