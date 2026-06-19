import type { TodoApi } from "../types/task";

export async function loadTodos(): Promise<TodoApi[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return response.json();
}