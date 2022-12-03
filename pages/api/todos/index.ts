import type { NextApiRequest, NextApiResponse } from "next";

type Todo = {
  title: string;
};

const todos = [
  { title: "読書" },
  { title: "プログラミング" },
  { title: "昼寝" },
];

export default async (req: NextApiRequest, res: NextApiResponse<Todo[]>) => {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  res.status(200).json(todos);
};
