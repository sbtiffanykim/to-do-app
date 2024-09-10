import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { FaPlus } from 'react-icons/fa';
import { categoryModalState, categoryState, selectedCategoryState } from '../atoms';
import AddCategoryModal from './AddCategoryModal';

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  margin: 20px 0px;
`;

const Button = styled.button<{ selected?: boolean }>`
  all: unset;
  background-color: ${(props) => props.theme.buttonBgColor};
  font-weight: ${(props) => (props.selected ? 600 : 'normal')};
  padding: 5px;
  text-align: center;
  font-size: 14px;
  border-radius: 5px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  color: ${(props) => props.theme.buttonTextColor};
  &:hover {
    background-color: ${(props) => props.theme.buttonHoverBgColor};
  }
  &:active {
    transform: scale(0.98);
  }
`;

export default function CategorySelector() {
  const allCategories = useRecoilValue(categoryState);
  const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState);
  const [isCategoryAddBtnClicked, setisCategoryAddBtnClicked] =
    useRecoilState(categoryModalState);

  const onClick = (event: React.FormEvent<HTMLButtonElement>) => {
    setSelectedCategory(event.currentTarget.name as any);
  };

  const handleAddBtn = () => {
    setisCategoryAddBtnClicked(true);
  };

  return (
    <>
      <CategoryList>
        {allCategories?.map((category) => (
          <Button
            key={category}
            name={category}
            onClick={onClick}
            selected={category === selectedCategory}
          >
            {category}
          </Button>
        ))}
        <Button onClick={handleAddBtn}>
          <FaPlus />
        </Button>
      </CategoryList>

      {isCategoryAddBtnClicked && <AddCategoryModal />}
    </>
  );
}
