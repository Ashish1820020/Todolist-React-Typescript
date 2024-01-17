import { MdModeEditOutline, MdOutlineDownloadDone, MdDelete, MdCancel } from "react-icons/md";
import { Todo, Todos } from '../models'
import './styles.css'
import { useEffect, useRef, useState } from "react";

interface TodoCardInterface extends Todo, Todos {
  handleCompleted: (id: number) => void;
  handleDelete: (id: number) => void;
} 

const TodoCard = ({id, todo, isCompleted, handleCompleted, handleDelete, todos, setTodos}: TodoCardInterface) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo);

  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
      );
      setEdit(false);
    };
    
    
    useEffect(() => {
      inputRef.current?.focus();
    }, [edit]);

  return (
    <form className='todo' onSubmit={(e) => handleEdit(e, id)}>
      {
        edit?
          <input
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="todos__single--text"
            ref={inputRef}
          />
            :
            isCompleted? 
              <s className="todo_text">{todo}</s>
              :
              <div className="todo_text">{todo}</div>
      }
      <div className="todo_buttons_container">
        <span className="icon" onClick={() => {
          if(!edit && !isCompleted) 
            setEdit(!edit)
          }}><MdModeEditOutline /></span>
        <span className="icon" onClick={() => handleDelete(id)}><MdDelete /></span>
        <span className= {edit? 'icon disable' : 'icon'} onClick={() => handleCompleted(id)}>
          {/* {
            isCompleted?
            <MdCancel />
            :
            <MdOutlineDownloadDone />
          } */}
          </span>
      </div>
    </form>
  )
}

export default TodoCard;
