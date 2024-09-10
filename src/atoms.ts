import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export enum DefaultCategories {
  'TO_DO' = 'TO_DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}

export interface ITodo {
  id: number;
  text: string;
  category: string;
}

const { persistAtom } = recoilPersist({
  key: 'List',
  storage: localStorage,
});

export const categoryModalState = atom({
  key: 'categoryModalState',
  default: false,
});

export const categoryState = atom<string[]>({
  key: 'categoryList',
  default: Object.keys(DefaultCategories),
  effects_UNSTABLE: [persistAtom],
});

export const selectedCategoryState = atom({
  key: 'selectedCategory',
  default: DefaultCategories.TO_DO,
  effects_UNSTABLE: [persistAtom],
});

export const toDoState = atom<ITodo[]>({
  key: 'toDos',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(selectedCategoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
