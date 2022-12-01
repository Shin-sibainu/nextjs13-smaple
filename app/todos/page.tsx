import { use } from "react";

type Todo = {
  title: string;
};

async function getData() {
  const res = await fetch("http://localhost:3000/api/todos");
  return res.json();
}

export default function Page() {
  const todos: Todo[] = use(getData());

  return (
    <>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <div>{todo.title}</div>
      ))}
    </>
  );
}
