import { prisma } from "../db/prisma.ts";
import { Entry } from "../types/entry.ts";

export const createEntryService = async (data: Entry) => {
  const { amount, description, category } = data;
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

export const getEntryByIdService = async (id: string) => {
  const entry = await prisma.entry.findUnique({
    where: {
      id: id,
    },
  });
    
  return entry; 
}