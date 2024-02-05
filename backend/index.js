const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());

app.post("/todo", function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    req.statusCode(404).json({
      msg: "You sent the wrong inputs!",
    });
    return;
  } else {
  }
});

app.get("/todos", function (req, res) {});

app.put("/completed", function (req, res) {
  const createPayload = req.body;
  const parsedPayload = updateTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(404).json({
      msg: "You sent wrong inputs!",
    });
    return;
  } else {
  }
});
