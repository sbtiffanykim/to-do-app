import { useRecoilValue } from 'recoil';
import { toDoSelector } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import CategorySelector from './CategorySelector';

export default function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CategorySelector />

      <CreateToDo />
      {toDos?.map((item) => (
        <ToDo key={item.id} {...item} />
      ))}
    </div>
  );
}
