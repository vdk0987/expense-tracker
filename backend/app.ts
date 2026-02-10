import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { entriesRouter } from './routes/entries.router.ts';

export const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/", entriesRouter);
