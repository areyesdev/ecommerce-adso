import { Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts";

// esto es temporal es data que tenemos harcodeada pero esto vendria de nuestra base de datos
import { initialData } from "../database/products";
import { ProductList } from '../components/products/ProductList';



export default function Home() {
  return (
    <ShopLayout title={"Ecommerce Sena - Home"} pageDescription={"Encuentra los mejores productos de tecnologia aquí"}>
      {/* Esto nos ayuda para el SEO nuestra app */}
      <Typography variant="h1" component='h1'>Tienda</Typography>
      {/* styles sx */}
      <Typography variant="h2" sx={{ mb: 1 }}>Todos los productos</Typography>
      {/* se nos va a  quejar porque va necesitar una propiedad le damos ctrl . y añadimos la propiedad  */}
      <ProductList
        // el problema es que aca se nos quejaria porque los tipos no son compatibles
        products={initialData.products as any}
      />
    </ShopLayout>
  )
}

