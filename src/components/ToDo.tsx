import React from 'react';
import { ITodo, toDoState } from '../atoms';
import { useSetRecoilState } from 'recoil';

export default function ToDo({ text, category, id }: ITodo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((prev) => {
      const targetIndex = prev.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [...prev.slice(0, targetIndex), newToDo, ...prev.slice(targetIndex + 1)];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== 'DOING' && (
        <button onClick={onClick} name='DOING'>
          Doing
        </button>
      )}
      {category !== 'DONE' && (
        <button onClick={onClick} name='DONE'>
          Done
        </button>
      )}
      {category !== 'TO_DO' && (
        <button onClick={onClick} name='TO_DO'>
          To do
        </button>
      )}
    </li>
  );
}
