import { errorSelector, useRecoilState, useSetRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { MdPlaylistAdd } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { categoryState } from '../atoms';
import React from 'react';

interface ICategoryAddForm {
  newCategory: string;
}

interface ICategoryAddProps {
  handleClose: () => void;
}

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 20px;
`;

const Title = styled.p`
  color: ${(props) => props.theme.accentColor};
  font-weight: 600;
  font-size: 20px;
  margin-top: 30px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  input {
    padding: 5px;
    border: 1px solid ${(props) => props.theme.borderColor};
    font-size: 15px;
    border-radius: 3px;
    width: 90%;
    margin-right: 5px;
    margin-top: 5px;
  }
`;

const AddButton = styled(MdPlaylistAdd)`
  padding: 4px;
  font-size: 14px;
  height: 30px;
  width: 30px;
  background-color: ${(props) => props.theme.buttonBgColor};
  color: ${(props) => props.theme.buttonTextColor};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.buttonHoverBgColor};
  }
  &:active {
    transform: scale(0.98);
  }
`;

const CloseButton = styled(IoMdClose)`
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  font-weight: 600;
  font-size: 20px;
  transition: color 0.3s ease;
  &:hover {
    color: black;
  }
`;

const ErrorMessage = styled.div`
  font-size: 12px;
  color: #ff6348;
`;

export default function AddCategory({ handleClose }: ICategoryAddProps) {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<ICategoryAddForm>();
  const [categoryList, setCategoryList] = useRecoilState(categoryState);

  const handleAddCategory = ({ newCategory }: ICategoryAddForm) => {
    if (categoryList.includes(newCategory)) {
      // if category already exists
      setError('newCategory', {
        type: 'manual',
        message: `${newCategory} already exists`,
      });
      return;
    }

    setCategoryList((prev) => {
      return [...prev, newCategory];
    });
    reset();
    handleClose();
  };

  const handleChange = () => {
    clearErrors('newCategory');
  };

  return (
    <ModalContainer>
      <CloseButton onClick={handleClose} />
      <Title>Add Category</Title>
      <Form onClick={handleSubmit(handleAddCategory)}>
        <input
          type='text'
          placeholder='Category Name'
          {...register('newCategory', {
            required: 'This field is required',
            validate: (value) =>
              !categoryList.includes(value) || `${value} already exists`,
          })}
          onChange={handleChange}
        />
        <AddButton />
      </Form>
      {errors.newCategory && <ErrorMessage>{errors.newCategory.message}</ErrorMessage>}
    </ModalContainer>
  );
}
