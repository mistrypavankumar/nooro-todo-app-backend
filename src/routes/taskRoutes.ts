import express from "express";
import {
  createTask,
  getTaskById,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/taskController";

const router = express.Router();

/*
    @route POST /api/v1/tasks
    @desc Create a new task
    @access Public
*/
router.post("/", createTask);

/*
    @route GET /api/v1/tasks
    @desc Get all tasks
    @access Public
*/
router.get("/", getTasks);

/*
    @route GET /api/v1/tasks/:id
    @desc Get a task by ID
    @access Public
*/
router.get("/:id", getTaskById);

/*
    @route PUT /api/v1/tasks/:id
    @desc Update a task by ID
    @access Public
*/
router.put("/:id", updateTask);

/*
    @route DELETE /api/v1/tasks/:id
    @desc Delete a task by ID
    @access Public
*/
router.delete("/:id", deleteTask);

export default router;
