import React, { useRef } from 'react'

interface Props{
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleTodoAdding: (e: React.SyntheticEvent) => void
}

const InputFields:React.FC<Props> = ({todo, setTodo, handleTodoAdding}) => {
  const inputRef =  useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e)=>{
      handleTodoAdding(e);
      inputRef.current?.blur();
    }} >
      <input type="text" 
      ref={inputRef}
      className='input_box' 
      placeholder='Enter task'
      value={todo}
      onChange={(e) => setTodo(e.target.value)}/>
      <button className='input_submit'>Go</button>
    </form>
  )
}

export default InputFields;
