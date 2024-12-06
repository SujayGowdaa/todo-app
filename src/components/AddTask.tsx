import { useState } from 'react';
import { Todo } from '../model';
import { v4 as generateId } from 'uuid';

interface PropTypes {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function AddTask({ setTodos }: PropTypes) {
  const [todo, setTodo] = useState<string>('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (todo.trim() !== '') {
      setTodos((prev) => [
        ...prev,
        { id: generateId(), todo: todo.trim(), isDone: false },
      ]);
      setTodo('');
    }
  }

  return (
    <form className=' flex' onSubmit={(e) => handleSubmit(e)}>
      <input
        type='text'
        placeholder='Enter todo'
        className=' px-4 py-2 text-lg rounded-l-md w-full outline-none bg-purple-100 focus:bg-white transition-all duration-200'
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button className=' capitalize px-12 py-2 font-semibold  text-lg text-yellow-800 hover:text-orange-700 rounded-r-md bg-yellow-300 hover:bg-yellow-400 transition-all duration-200'>
        add
      </button>
    </form>
  );
}
