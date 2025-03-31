const {
  createTask,
  fetchAllTasks,
  updateTaskById,
  deleteTaskById,
} = require("../Controllers/TaskController");

const router = require("express").Router();

router.post("/", createTask);

router.get("/", fetchAllTasks);

router.put("/:id", updateTaskById);

router.delete("/:id", deleteTaskById);

module.exports=router;
