import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from '@mui/material';


export default function Product(props) {
  const { product, onAdd } = props;
  const classes = useStyles();
  
  return (
    <div>
      <Card className={classes.root}>
      <CardContent>
        <div className={classes.cardContent}>
        <img src={require('../assets/' + product.imageProduct)} />
          <Typography gutterBottom variant="h5" component="h2">
            {product.nameProduct}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {product.priceProduct} €
          </Typography>
          <IconButton color="primary" component="span" onClick={() => onAdd(product)}>
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}
