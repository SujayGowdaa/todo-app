import { useState } from 'react';
import { Todo } from './model';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import NoList from './components/NoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todos);
  return (
    <div className=' flex flex-col gap-12 bg-violet-950 h-screen p-12'>
      <div className=' flex gap-4 space-y-2 uppercase tracking-wide'>
        <h1 className='text-3xl font-bold text-orange-200'>todo app »</h1>
        <h3 className=' text-lg text-violet-300 font-medium tracking-[8px]'>
          using typescript
        </h3>
      </div>
      <div className='space-y-4'>
        <h2 className=' capitalize text-lg text-violet-200 font-medium'>
          add new task
        </h2>
        <AddTask setTodos={setTodos} />
      </div>

      {todos.length > 0 ? (
        <ul className=' grid gap-8'>
          {todos.map((todo, i) => (
            <TodoList data={todo} i={i + 1} />
          ))}
        </ul>
      ) : (
        <NoList />
      )}
    </div>
  );
};

export default App;
