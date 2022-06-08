import React from 'react';
import { Grid } from '@material-ui/core';
import Category from './category/category';

const Categories = ({ categories }) => {
  return (
    <div>
      <h3>Categories</h3>

      {categories.map((categorie) => {
        return (
          <ul>
            <li>
              <a href={`/${categorie.slug}`}>
                <Category categorie={categorie} />
              </a>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Categories;
