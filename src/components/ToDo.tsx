import React from 'react';
import { Cateogories, ITodo, toDoState } from '../atoms';
import { useSetRecoilState } from 'recoil';

export default function ToDo({ text, category, id }: ITodo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((prev) => {
      const targetIndex = prev.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as Cateogories };
      return [...prev.slice(0, targetIndex), newToDo, ...prev.slice(targetIndex + 1)];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Cateogories.DOING && (
        <button onClick={onClick} name={Cateogories.DOING}>
          Doing
        </button>
      )}
      {category !== Cateogories.DONE && (
        <button onClick={onClick} name={Cateogories.DONE}>
          Done
        </button>
      )}
      {category !== Cateogories.TO_DO && (
        <button onClick={onClick} name={Cateogories.TO_DO}>
          To do
        </button>
      )}
    </li>
  );
}
