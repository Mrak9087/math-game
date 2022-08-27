import React from 'react';

import style from './categories.module.css';
import Category from './Category';

interface ICategories {
  name: string;
}

interface ICategoriesArr {
  arrCategories: ICategories[];
}

const Categories = ({ arrCategories }: ICategoriesArr) => {
  return (
    <div className={style.categories}>
      <h2>Categories</h2>
      <div className={style.categoriesWrapper}>
        {arrCategories.map((item, index) => (
          <Category key={index} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
