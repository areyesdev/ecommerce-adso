import NextLink from 'next/link'

import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';


export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href='/' passHref legacyBehavior>
          <Link display='flex' alignItems='center' >
            <Typography variant='h6'>Ecommerce |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>
        <Box flex={1} />
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <NextLink href='/category/mouse' passHref legacyBehavior>
            <Link>
              <Button>Mouse</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/streaming' passHref legacyBehavior>
            <Link>
              <Button>Streaming</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/keyboard' passHref legacyBehavior>
            <Link>
              <Button>Keyboard</Button>
            </Link>
          </NextLink>
        </Box>
        <Box flex={1} />
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <NextLink href='/cart' passHref legacyBehavior>
          <Link>
            <IconButton>
              <Badge badgeContent={5} color='secondary'>
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>
        <Button>
          Menú
        </Button>
      </Toolbar>
    </AppBar>
  )
}
