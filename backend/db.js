const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://rishi29ganguly:sha2001y@cluster0.31gvkne.mongodb.net/"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

mongoose.exports = {
  todo,
};
