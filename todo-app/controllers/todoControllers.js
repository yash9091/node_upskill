let todos = [
  { id: 1, task: "Learn Node.js", completed: false },
  { id: 2, task: "Build ToDo App", completed: false }
];

// GET all todos
exports.getTodos = (req, res) => {
  res.json(todos);
};

// ADD todo
exports.addTodo = (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: false
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
};

// UPDATE todo
exports.updateTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todo.task = req.body.task || todo.task;
  todo.completed = req.body.completed ?? todo.completed;

  res.json(todo);
};

// DELETE todo
exports.deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.json({ message: "Todo deleted successfully" });
};
