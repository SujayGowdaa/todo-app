import { useState } from 'react';

interface PropTypes {
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function AddTask({ setTodos }: PropTypes) {
  const [task, setTask] = useState<string>('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (task.trim() !== '') {
      setTodos((prev) => [...prev, task.trim()]);
      setTask('');
    }
  }

  return (
    <form className=' flex' onSubmit={(e) => handleSubmit(e)}>
      <input
        type='text'
        placeholder='Enter task'
        className=' px-4 py-2 text-lg rounded-l-md w-full outline-none bg-purple-100 focus:bg-white transition-all duration-200'
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button className=' capitalize px-12 py-2 font-semibold  text-lg text-yellow-800 hover:text-orange-700 rounded-r-md bg-yellow-300 hover:bg-yellow-400 transition-all duration-200'>
        add
      </button>
    </form>
  );
}
