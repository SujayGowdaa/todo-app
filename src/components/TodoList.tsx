import { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaTrash } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

interface PropTypes {
  data: { id: string; todo: string; isDone: boolean };
  i: number;
  handleClickTaskToggle: (id: string) => void;
  handleClickEdit: (id: string, value: string) => void;
  handleClickDelete: (id: string) => void;
}

export default function TodoList({
  data,
  i,
  handleClickTaskToggle,
  handleClickEdit,
  handleClickDelete,
}: PropTypes) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(data.todo);

  return (
    <li className={` ${data.isDone ? 'todo-done' : 'todo'} `}>
      <div className=' flex items-center gap-4 w-full'>
        <span
          className={` ${
            data.isDone
              ? ' bg-yellow-800 text-yellow-200 group-hover:bg-yellow-900'
              : 'bg-violet-800 text-violet-200 group-hover:bg-violet-900'
          } rounded-full w-10 h-10 flex justify-center items-center font-medium shrink-0`}
        >{`${i < 10 ? `0${i}` : i}`}</span>
        {isEdit ? (
          <input
            type='text'
            className=' text-black px-2 py-1 outline-yellow-400 w-full h-full'
            defaultValue={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
        ) : (
          <p
            className={`${
              data.isDone && ' line-through'
            } capitalize text-lg font-medium text-gray-100`}
          >
            {data.todo}
          </p>
        )}
      </div>
      {isEdit ? (
        <div className=' flex items-center gap-4'>
          <button
            className={`${data.isDone ? 'btn-primary-active' : 'btn-primary'}`}
            onClick={() => {
              handleClickEdit(data.id, editValue);
              setIsEdit(false);
            }}
          >
            <FaCheckCircle />
          </button>
          <button
            className={`${data.isDone ? 'btn-primary-active' : 'btn-primary'}`}
            onClick={() => setIsEdit(false)}
          >
            <FaTimesCircle />
          </button>
        </div>
      ) : (
        <div className=' flex items-center gap-4'>
          {data.isDone ? (
            <button
              className={`${
                data.isDone ? 'btn-primary-active' : 'btn-primary'
              }`}
              onClick={() => handleClickTaskToggle(data.id)}
            >
              <FaTimesCircle />
            </button>
          ) : (
            <button
              className={`${
                data.isDone ? 'btn-primary-active' : 'btn-primary'
              }`}
              onClick={() => handleClickTaskToggle(data.id)}
            >
              <FaCheckCircle />
            </button>
          )}
          <button
            className={`${data.isDone ? 'btn-primary-active' : 'btn-primary'}`}
            onClick={() => setIsEdit(true)}
          >
            <MdEdit />
          </button>
          <button
            className={`${data.isDone ? 'btn-primary-active' : 'btn-primary'}`}
            onClick={() => handleClickDelete(data.id)}
          >
            <FaTrash />
          </button>
        </div>
      )}
    </li>
  );
}
