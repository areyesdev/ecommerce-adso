import NextLink from 'next/link'

import { Box, Typography, Link } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { RemoveShoppingCartOutlined } from "@mui/icons-material"


const EmptyPage = () => {
  return (
    <ShopLayout title='Carrito vació' pageDescription='Carrito de compras sin productos'>
      <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)' sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display='flex' alignItems='center' flexDirection='column'>
          <Typography>Su carrito de compras está vació</Typography>
          <NextLink href='/' passHref legacyBehavior>
            <Link typography='h4' color='secondary'>
              regresar
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  )
}

export default EmptyPage