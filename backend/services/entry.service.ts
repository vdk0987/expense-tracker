import { prisma } from "../db/prisma.ts";
import { Entry } from "../types/entry.ts";

export const createEntryService = async (data: Entry) => {
  const { amount, description } = data;
  const entry = await prisma.entry.create({
    data: {
      amount: amount,
      description: description,
      date: new Date(),
    },
  });
};

export const getAllEntriesService = async () => {
  const entries = await prisma.entry.findMany();
  return entries;
}