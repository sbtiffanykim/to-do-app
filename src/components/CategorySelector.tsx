import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, selectedCategoryState } from '../atoms';
import AddCategory from './AddCategory';

export default function CategorySelector() {
  const categories = useRecoilValue(categoryState);
  const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.currentTarget.value as any);
  };

  return (
    <>
      <select onInput={onInput} value={selectedCategory}>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>

      <AddCategory />
    </>
  );
}
