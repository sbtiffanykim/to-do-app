import { ITodo } from '../atoms';

export default function ToDo({ text }: ITodo) {
  return (
    <li>
      <span>{text}</span>
      <button>Done</button>
      <button>To Do</button>
      <button>Doing</button>
    </li>
  );
}
