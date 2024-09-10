import { useSetRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { FaPlus } from 'react-icons/fa';
import { categoryState } from '../atoms';

interface ICategoryAddForm {
  newCategory: string;
}

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
    <form onClick={handleSubmit(handleAddCategory)}>
      <input
        type='text'
        {...register('newCategory', { required: 'This field is required' })}
      />
      <button>
        <FaPlus />
      </button>
    </form>
  );
}
