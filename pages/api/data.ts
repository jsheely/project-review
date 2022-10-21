// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): Data {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}
function randomNumber() {
  return Math.floor(Math.random() * (1000 - 100) + 100) / 100;
}

const rowData = [
  ...Array.from({ length: 1000 }, (_, k) => {}).map((_, i) =>
    createData(
      `Row ${i}`,
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber()
    )
  ),
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(rowData);
}
