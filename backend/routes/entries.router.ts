import { Request, Response, NextFunction, Router } from "express";
import { getEntries, createEntries } from "../controllers/entries.controller";

export const entriesRouter = Router();

entriesRouter.post("/create", (req: Request, res: Response, next: NextFunction) => {
  try {
    createEntries(req, res, next);
  } catch (error) {
    res.status(500).send(error);
  }
});

entriesRouter.get("/all", (req: Request, res: Response, next: NextFunction) => {
  try {
    getEntries(req, res, next);
  } catch (error) {
    res.status(500).send(error);
  }
});