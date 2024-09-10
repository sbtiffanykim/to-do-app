import { useSetRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { categoryState } from '../atoms';
import styled from 'styled-components';

interface ICategoryAddForm {
  newCategory: string;
}

const Form = styled.form`
  align-self: center;
`;

export default function AddCategory() {
  const { register, handleSubmit, reset } = useForm<ICategoryAddForm>();
  const setCategoryList = useSetRecoilState(categoryState);

  const handleAddCategory = ({ newCategory }: ICategoryAddForm) => {
    setCategoryList((prev) => {
      reset();
      return [...prev, newCategory];
    });
  };

  return (
    <Form onClick={handleSubmit(handleAddCategory)}>
      <input
        type='text'
        placeholder='Add Category'
        {...register('newCategory', { required: 'This field is required' })}
      />
      <button> Add</button>
    </Form>
  );
}
