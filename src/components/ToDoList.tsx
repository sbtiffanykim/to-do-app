import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, Cateogories, toDoSelector } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import React from 'react';

export default function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select onInput={onInput} value={category}>
        <option value={Cateogories.TO_DO}>To Do</option>
        <option value={Cateogories.DOING}>Doing</option>
        <option value={Cateogories.DONE}>Done</option>
      </select>

      <CreateToDo />
      {toDos?.map((item) => (
        <ToDo key={item.id} {...item} />
      ))}
    </div>
  );
}
