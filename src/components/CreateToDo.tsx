import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState } from '../atoms';

interface IForm {
  toDo: string;
}

export default function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

  const handleValid = ({ toDo }: IForm) => {
    setToDos((prev) => [{ id: Date.now(), text: toDo, category: category }, ...prev]);
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
