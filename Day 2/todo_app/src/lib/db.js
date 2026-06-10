import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const TodoSchema =  mongoose.Schema({
  description: String,
  title: String,
  isDone: Boolean,
});

export const TodoModel = mongoose.model("todos", TodoSchema);
export const UserModel = mongoose.model("users", UserSchema);


mongoose.connect("mongodb+srv://bakrid_user:bakrid_2026@bakrid-cluster.zdbxgvu.mongodb.net/next_todo_app")