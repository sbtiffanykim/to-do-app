import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { toDoState } from '../atoms';

interface IForm {
  toDo: string;
}

export default function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);

  const handleValid = ({ toDo }: IForm) => {
    console.log('add to do', toDo);
    setToDos((prev) => [{ id: Date.now(), text: toDo, category: 'TO_DO' }, ...prev]);
    setValue('toDo', '');
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        type='text'
        {...register('toDo', {
          required: 'This field is required',
        })}
        placeholder='Write a to do'
      />
      <button>Add</button>
    </form>
  );
}
