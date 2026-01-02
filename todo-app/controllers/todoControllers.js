const Todo = require("../models/Todo");

// GET all todos
exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

// ADD todo
exports.addTodo = async (req, res) => {
  const todo = new Todo({
    task: req.body.task
  });

  const savedTodo = await todo.save();
  res.status(201).json(savedTodo);
};

// UPDATE todo
exports.updateTodo = async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedTodo);
};

// DELETE todo
exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted successfully" });
};
