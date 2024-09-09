import { atom, selector } from 'recoil';

export enum Cateogories {
  'TO_DO' = 'TO_DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}

export interface ITodo {
  id: number;
  text: string;
  category: Cateogories;
}

export const categoryState = atom<Cateogories>({
  key: 'category',
  default: Cateogories.TO_DO,
});

export const toDoState = atom<ITodo[]>({
  key: 'toDo',
  default: [],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
