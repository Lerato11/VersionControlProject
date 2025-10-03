const express = require('express');
const { get } = require('http');
const path = require('path');


const { dbConnect } =  require("../src/database");
const projectRoutes = require("./routes/projectsRoutes");
const feedRoutes = require("./routes/feedsRoutes");
const userRoutes = require("./routes/usersRoutes");
const authRoutes = require("./routes/authRoutes");
const searchRoutes = require("./routes/searchRoutes");

const app = express();
const PORT = 3000;

// const projectRoutes = require("./routes/projectsRoutes");

app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend/public")));

app.use("/api/projects", projectRoutes);
app.use("/api/feeds", feedRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/search", searchRoutes);

app.use("/assets/images", express.static(path.join(__dirname, "assets/images")));


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
    await dbConnect(); 
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