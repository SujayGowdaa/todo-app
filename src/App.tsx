import { useState } from 'react';
import AddTask from './components/AddTask';

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  console.log(todos);
  return (
    <div className=' bg-purple-950 h-screen p-12 space-y-12'>
      <div className=' flex gap-4 space-y-2 uppercase tracking-wide'>
        <h1 className='text-3xl font-bold text-yellow-200'>todo app »</h1>
        <h3 className=' text-lg text-purple-300 font-medium tracking-[8px]'>
          using typescript
        </h3>
      </div>
      <div className='space-y-4'>
        <h2 className=' capitalize text-lg text-purple-200 font-medium'>
          add new task
        </h2>
        <AddTask setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;
