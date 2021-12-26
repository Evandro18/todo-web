const baseUrl = 'http://localhost:8080';

export const listTodos = async () => {
  const body = await fetch(`${baseUrl}/todo`);
  const data = await body.json();
  return data;
}