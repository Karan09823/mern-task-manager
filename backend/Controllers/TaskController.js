const TaskModel = require("../Models/TaskModel");

//create Task
const createTask = async (req, res) => {
  const data = req.body;

  try {
    const model = new TaskModel(data);
    await model.save();
    res.status(200).json({
      message: "Task added",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to add task",
      success: false,
    });
  }
};

//fetch all tasks
const fetchAllTasks = async (req, res) => {
  try {
    const data = await TaskModel.find({});
    res.status(200).json({
      message: "All Tasks",
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      message: "failed to fetch tasks",
      success: false,
    });
  }
};

//update task by id

const updateTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    await TaskModel.findByIdAndUpdate(id, { $set: { ...body } });
    res.status(200).json({
      message: "Task Updated",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "failed to update task",
      success: false,
    });
  }
};

//delete task by id
const deleteTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    await TaskModel.deleteOne({_id:id});
    res.status(200).json({
      message: "Task Deleted",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "failed to delete task",
      success: false,
    });
  }
};

module.exports = { createTask, fetchAllTasks, updateTaskById, deleteTaskById };
