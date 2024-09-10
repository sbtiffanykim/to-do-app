import React from 'react';
import { categoryState, ITodo, toDoState } from '../atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { FaTrash } from 'react-icons/fa';

export default function ToDo({ text, category, id }: ITodo) {
  const setToDos = useSetRecoilState(toDoState);
  const categories = useRecoilValue(categoryState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((prev) => {
      const targetIndex = prev.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name };
      return [...prev.slice(0, targetIndex), newToDo, ...prev.slice(targetIndex + 1)];
    });
  };

  const handleDelete = () => {
    setToDos((prev) => {
      return prev.filter((toDo) => toDo.id !== id);
    });
  };

  return (
    <li>
      <span>{text}</span>
      {categories
        .filter((cat) => cat !== category)
        .map((cat) => (
          <button key={cat} onClick={onClick} name={cat}>
            {cat}
          </button>
        ))}

      <button onClick={handleDelete}>
        <FaTrash />
      </button>
    </li>
  );
}
