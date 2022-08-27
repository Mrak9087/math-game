import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../../store/reducers/gameSlice';
import { AppDispatch, RootState } from '../../../store/store';

import style from './category.module.css';

interface ICategory {
  name: string;
}
const Category = ({ name }: ICategory) => {
  const store = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const activeClass = name === store.category ? style.active : '';

  const handleClick = () => {
    dispatch(setCategory(name));
  };

  return (
    <div className={`${style.category} ${activeClass}`} onClick={handleClick}>
      {name}
    </div>
  );
};

export default Category;
