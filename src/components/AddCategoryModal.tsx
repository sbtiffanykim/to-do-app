import styled from 'styled-components';
import AddCategory from './AddCategory';
import { useRecoilState } from 'recoil';
import { categoryModalState } from '../atoms';

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background-color: #ffffff;
  min-width: 400px;
  min-height: 200px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease-in-out;
  z-index: 1000;
`;

export default function AddCategoryModal() {
  const [isCategoryModalVisible, setisCategoryModalVisible] =
    useRecoilState(categoryModalState);
  const handleClose = () => {
    setisCategoryModalVisible(false);
  };

  if (!isCategoryModalVisible) return null;

  return (
    <Backdrop onClick={handleClose}>
      {/* prevent modal from closing when clicked */}
      <Modal onClick={(e) => e.stopPropagation()}>
        <AddCategory handleClose={handleClose} />
      </Modal>
    </Backdrop>
  );
}
