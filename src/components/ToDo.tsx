import React from 'react';
import { categoryState, ITodo, toDoState } from '../atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';

const ToDoItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const ToDoText = styled.p``;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  margin-top: 10px;
  gap: 7px;
`;

const CategoryButton = styled.button`
  all: unset;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 12px;
  background-color: #f1f2f6;
  max-width: 70px;
  padding: 4px 8px;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dfe4ea;
  }
  &:active {
    transform: scale(0.98);
  }
`;

const CancelButton = styled(CategoryButton)`
  background-color: #f3a683;
  color: #2f3542;
  width: fit-content;
  max-width: fit-content;
  &:hover {
    background-color: #f59a70;
  }
  svg {
    font-size: 13px;
  }
`;

export default function ToDo({ text, category, id }: ITodo) {
  const setToDos = useSetRecoilState(toDoState);
  const categories = useRecoilValue(categoryState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((prev) => {
      const targetIndex = prev.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name };
      return [...prev.slice(0, targetIndex), newToDo, ...prev.slice(targetIndex + 1)];
    });
  };

  const handleDelete = () => {
    setToDos((prev) => {
      return prev.filter((toDo) => toDo.id !== id);
    });
  };

  return (
    <ToDoItem>
      <ToDoText>{text}</ToDoText>
      <ButtonGrid>
        {categories
          .filter((cat) => cat !== category)
          .map((cat) => (
            <CategoryButton key={cat} onClick={onClick} name={cat}>
              {cat}
            </CategoryButton>
          ))}

        <CancelButton onClick={handleDelete}>
          <FaTrash />
        </CancelButton>
      </ButtonGrid>
    </ToDoItem>
  );
}
