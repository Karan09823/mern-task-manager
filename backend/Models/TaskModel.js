const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema(
  {
    taskName: {
      type: String,
      required: [true,"Task name is required"],
    },
    isDone: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const TaskModel = mongoose.model("Todo", TaskSchema);
module.exports = TaskModel;
