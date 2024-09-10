import { useRecoilValue } from 'recoil';
import { toDoSelector } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import CategorySelector from './CategorySelector';
import styled from 'styled-components';

const InnerContainer = styled.div`
  width: 100%;
  padding: 20px 40px;
`;

const Title = styled.p`
  color: ${(props) => props.theme.accentColor};
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin: 20px 0px;
`;

const ToDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0px 20px 0px;
`;

export default function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);

  return (
    <InnerContainer>
      <Title>To Dos</Title>
      <CategorySelector />

      <CreateToDo />

      <ToDoContainer>
        {toDos?.map((item) => (
          <ToDo key={item.id} {...item} />
        ))}
      </ToDoContainer>
    </InnerContainer>
  );
}
