import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './product/product';
import useStyles from './styles';
import Navbar from '../Navbar/navbar';
import Categories from '../Categories/categories';

const Products = ({ products, onAddToCart, totalItems, categories }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Navbar totalItems={totalItems} />
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
