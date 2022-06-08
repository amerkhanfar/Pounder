import React from 'react';
import { commerce } from '../../../lib/commerce';
import Product from '../../Products/product/product';

const Category = ({ categorie }) => {
  const { data } = commerce.categories.retrieve(categorie.slug, {
    type: 'slug',
  });

  const { data: product } = commerce.products.list({
    category_slug: categorie.slug,
  });

  return (
    <div>
      <h1>{categorie.name}</h1>
    </div>
  );
};

export default Category;
