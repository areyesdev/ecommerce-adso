
// vamos a crear nuestra interface para nuestra data oficial
// IProduct para saber que es una interfaz para ya despues crear un modelo
export interface IProduct {
  _id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ISizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ITypes;
  gender: 'hombre' | 'mujer' | 'unisex';
}

export type ISizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | '3XL';
export type ITypes = 'camisetas' | 'buzos' | 'gorras';