import React from 'react';
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './style';
const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          title={product.name}
          image={product.image.url}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              JD {product.price.formatted}
            </Typography>
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
            component="p"
          />
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton
            aria-label="Add to Cart"
            onClick={() => {
              onAddToCart(product.id, 1);
            }}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
