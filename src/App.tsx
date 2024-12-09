import { useState } from 'react';
import { Todo } from './model';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import NoList from './components/NoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleClickTaskToggle(id: string) {
    const newTodos: Todo[] = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function handleClickEdit(id: string, value: string) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todo: value };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function handleClickDelete(id: string) {
    const newTodos: Todo[] = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className=' flex flex-col gap-12 bg-violet-950 h-screen p-12'>
      <div className=' flex gap-4 space-y-2 uppercase tracking-wide'>
        <h1 className='text-4xl font-bold text-yellow-200'>todo app »</h1>
        <h3 className=' text-xl self-end text-violet-300 font-medium tracking-[8px]'>
          using typescript
        </h3>
      </div>
      <div className='space-y-4'>
        <h2 className=' capitalize text-xl text-violet-200 font-medium'>
          add new task
        </h2>
        <AddTask setTodos={setTodos} />
      </div>
      {todos.length > 0 ? (
        <ul className=' grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8'>
          {todos.map((todo, i) => (
            <TodoList
              key={todo.id}
              data={todo}
              i={i + 1}
              handleClickTaskToggle={handleClickTaskToggle}
              handleClickEdit={handleClickEdit}
              handleClickDelete={handleClickDelete}
            />
          ))}
        </ul>
      ) : (
        <NoList />
      )}
    </div>
  );
};

export default App;
