import { FC, useMemo, useState } from "react"
import { Grid, Card, CardActionArea, CardMedia, Box, Typography, Link } from "@mui/material"

import NextLink from 'next/link';

import { IProduct } from '../../interface/products';


interface Props {
  product: IProduct;
}


export const ProductCard: FC<Props> = ({ product }) => {

  const [isHovered, setIsHoverd] = useState(false)
  const productImage = useMemo(() => {
    return isHovered

      ? `products/${product.images[1]}`

      : `products/${product.images[0]}`
  }, [isHovered, product.images])

  return (
    <Grid item
      xs={6}
      sm={4}
      key={product.slug}
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
    >
      <Card>
        {/* Colocamos prefetch para que next no haga un preloding de todos nuestros productos */}
        <NextLink href='/product/slug' passHref prefetch={false} legacyBehavior>
          <Link>
            <CardActionArea>
              <CardMedia
                component='img'
                className="fadeIn"

                image={productImage}
                alt={product.title}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>

      <Box sx={{ mt: 1 }} className='fadeIn'>
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`$${product.price}`}</Typography>
      </Box>
    </Grid>
  )
}
