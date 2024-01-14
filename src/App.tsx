import { useState } from 'react';
import './App.css';
import InputFields from './components/Inputfields';
import { Todo } from './models';
import TodosComponent from './components/TodosComponent';

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleTodoAdding = (e: React.FormEvent) => {
    e.preventDefault();
    setTodo("");
    if(todo){
      const newTodo: Todo ={
        id: todos.length,
        todo,
        isCompleted: false
      }
     setTodos([...todos, newTodo])
    }
  }


  return (
    <div className='App'>
      <span className="header">Taskify</span>
      <div className='input-container'>
        <InputFields todo={todo} setTodo={setTodo} handleTodoAdding={handleTodoAdding}/>
      </div>
      <TodosComponent {...{todos, setTodos}}/>
    </div>
  );
}

export default App;
