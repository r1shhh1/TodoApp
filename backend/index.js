const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    req.statusCode(404).json({
      msg: "You sent the wrong inputs!",
    });
    return;
  }

  //wait for the database updation
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created!",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find();

  res.json({
    response: todos,
  });
});

app.put("/completed", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = updateTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(404).json({
      msg: "You sent wrong inputs!",
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as completed!",
  });
});

app.listen(3000);
