import React from 'react';
import { Categories, ITodo, toDoState } from '../atoms';
import { useSetRecoilState } from 'recoil';
import { FaTrash } from 'react-icons/fa';

export default function ToDo({ text, category, id }: ITodo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((prev) => {
      const targetIndex = prev.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as Categories };
      return [...prev.slice(0, targetIndex), newToDo, ...prev.slice(targetIndex + 1)];
    });
  };

  const handleDelete = () => {
    setToDos((prev) => {
      const targetIndex = prev.findIndex((toDo) => toDo.id === id);
      return [...prev.slice(0, targetIndex), ...prev.slice(targetIndex + 1)];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button onClick={onClick} name={Categories.DOING}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button onClick={onClick} name={Categories.DONE}>
          Done
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button onClick={onClick} name={Categories.TO_DO}>
          To do
        </button>
      )}
      <button onClick={handleDelete}>
        <FaTrash />
      </button>
    </li>
  );
}
