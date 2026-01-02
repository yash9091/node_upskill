const express = require("express");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use("/todos", todoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
