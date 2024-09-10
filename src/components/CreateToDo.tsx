import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedCategoryState, toDoState } from '../atoms';
import styled from 'styled-components';

interface IToDoForm {
  toDo: string;
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 3px;
  outline: none;
  width: 60%;
  font-size: 13px;
  margin-right: 10px;
`;

const InputAddBtn = styled.button`
  padding: 7px 10px;
  border: none;
  background-color: #e98c3a;
  color: white;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e67e22;
  }
  &:active {
    transform: scale(0.98);
  }
`;

export default function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IToDoForm>();
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(selectedCategoryState);

  const handleValid = ({ toDo }: IToDoForm) => {
    setToDos((prev) => [{ id: Date.now(), text: toDo, category: category }, ...prev]);
    setValue('toDo', '');
  };

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <Input
        type='text'
        {...register('toDo', {
          required: 'This field is required',
        })}
        placeholder='Write a to do'
      />
      <InputAddBtn>Add</InputAddBtn>
    </Form>
  );
}
