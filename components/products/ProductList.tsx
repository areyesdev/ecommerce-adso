import { FC } from "react"
import { Grid } from "@mui/material"
import { IProduct } from '../../interface/products';
import { ProductCard } from "./ProductCard";

interface Props {
  products: IProduct[]
}


export const ProductList: FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {/* aca dentro iria algo muy parecido a nuestro index */}
      {
        products.map(product => (
          <ProductCard
            key={product.slug}
            // tenemos que enviar el producto que va a hacer el producto que estamos iterando
            product={product}
          />
        ))
      }
    </Grid>
  )
}
