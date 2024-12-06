import { FaCheckCircle, FaTimesCircle, FaTrash } from 'react-icons/fa';

interface PropTypes {
  data: { id: string; todo: string; isDone: boolean };
  i: number;
}

export default function TodoList({ data, i }: PropTypes) {
  return (
    <li
      key={data.id}
      className={` ${
        data.isDone
          ? ' bg-yellow-500 hover:bg-yellow-600 outline-yellow-400 hover:outline-yellow-500'
          : ' bg-violet-500 hover:bg-violet-600 outline-violet-400 hover:outline-violet-500'
      } capitalize text-lg text-white flex justify-between gap-4 px-4 py-4  hover:cursor-pointer outline outline-2 shadow-md shadow-violet-950 hover:translate-x-1 hover:translate-y-1 transition-all duration-100 group`}
    >
      <div className=' flex items-center gap-4'>
        <span
          className={` ${
            data.isDone
              ? ' bg-yellow-800 text-yellow-200 group-hover:bg-yellow-900'
              : 'bg-violet-800 text-violet-200 group-hover:bg-violet-900'
          } rounded-full w-8 h-8 flex justify-center items-center text-sm font-medium`}
        >{`${i < 10 ? `0${i}` : i}`}</span>
        <p className=' capitalize text-lg font-medium text-gray-100'>
          {data.todo}
        </p>
      </div>
      <div className=' flex gap-4'>
        {data.isDone ? (
          <button className=' capitalize rounded-r-lg text-2xl'>
            <FaTimesCircle />
          </button>
        ) : (
          <button className=' capitalize rounded-r-lg text-2xl'>
            <FaCheckCircle />
          </button>
        )}
        <button className=' capitalize rounded-r-lg text-2xl'>
          <FaTrash />
        </button>
      </div>
    </li>
  );
}
