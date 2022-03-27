import React from 'react'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function HandleProducts() {

    const [products, setProducts] = React.useState();

    const fetchProducts = async () => {
        await axios.get('http://localhost:8000/products/all', { withCredentials: true })
        .then((response)=> setProducts(response.data));
    };

    React.useEffect(() => {
        fetchProducts();
    }, []);


  return (
    <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nom du produit</TableCell>
            <TableCell>Prix du produit</TableCell>
            <TableCell>Image du produit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products && products.map((product) => (
            <TableRow
              key={product.idProduct}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{product.nameProduct}</TableCell>
              <TableCell>{product.priceProduct} €</TableCell>
              <TableCell>{product.imageProduct}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  )
}

export default HandleProducts