const express = require("express");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
app.use(express.json()); // middleware to read JSON

app.use("/todos", todoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
