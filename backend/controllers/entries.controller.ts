import { Request, Response, NextFunction } from "express";
import {
  getAllEntriesService,
  getEntryByIdService,
  createEntryService,
} from "../services/entry.service.ts";

export const createEntries = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const entry = await createEntryService(req.body);
    res.status(201).json(entry);
  } catch (err) {
    console.error("Error creating entry:", err);
  }
};

export const getEntries = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const entries = await getAllEntriesService();
    res.status(200).json(entries);
  } catch (err) {
    console.error("Error getting entries: ", err);
  }
};

export const getEntryById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const entry = await getEntryByIdService(req.params.id);
    if (entry) {
      res.status(200).json(entry);
    } else {
      res.status(404).json({ message: "Entry not found" });
    }
  } catch (err) {
    console.error("Error getting entry by id: ", err);
  }
};
