import { Request, Response } from "express";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import { prisma } from "../config/prisma";

export const createTask = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const { title, color } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const task = await prisma.task.create({
      data: {
        title,
        color,
      },
    });

    return res.status(201).json(task);
  }
);

export const getTasks = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const tasks = await prisma.task.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.status(200).json(tasks);
  }
);

export const getTaskById = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Task ID is required" });
    }

    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    return res.status(200).json(task);
  }
);

export const updateTask = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const { title, color, completed } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Task ID is required" });
    }

    const existingTask = await prisma.task.findUnique({
      where: { id },
    });

    if (!existingTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    const task = await prisma.task.update({
      where: { id },
      data: {
        title,
        color,
        completed,
      },
    });

    return res.status(200).json(task);
  }
);

export const deleteTask = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Task ID is required" });
    }

    const existingTask = await prisma.task.findUnique({
      where: { id },
    });

    if (!existingTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    await prisma.task.delete({
      where: { id },
    });

    return res.status(204).json({ message: "Task deleted successfully" });
  }
);
