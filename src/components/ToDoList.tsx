import { useRecoilValue } from 'recoil';
import { toDoSelector } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

export default function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  console.log(toDo, doing, done);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map((item) => (
          <ToDo key={item.id} {...item} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((item) => (
          <ToDo key={item.id} {...item} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((item) => (
          <ToDo key={item.id} {...item} />
        ))}
      </ul>
      <hr />
    </div>
  );
}
