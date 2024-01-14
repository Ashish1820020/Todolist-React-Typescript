export interface Todo {
    id: number,
    todo: string,
    isCompleted: boolean
}


export interface Todos{
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}