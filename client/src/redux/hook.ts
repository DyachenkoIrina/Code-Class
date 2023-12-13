import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch; //Эта константа устанавливается в функцию useDispatch из библиотеки Redux Toolkit.
// Она используется для получения объекта dispatch Redux, который позволяет отправлять actions.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; //Эта константа устанавливается в функцию useSelector из библиотеки
// Redux Toolkit. Она используется для выбора данных из состояния Redux в функциональных компонентах.
