export const API_URL = import.meta.env.MODE === 'development'
 ? 'http://localhost:3000'
 : import.meta.env.SITE

export interface ProductProps {
  id: number;
  title: string;
  body: string;
  category: string;
  slug: string;
  images: Array<{ src: string }>;
  createdAt: string;
  tags: Array<string> | null | string;
}

export enum CategoriesTypes {
  all = 'all',
  acuarela = 'Acuarela',
  cuadros = 'Cuadros',
  papelMache = 'PapelMache',
  madera = 'Madera',
}

export const Categories = [
  {
    name: 'Todos',
    value: CategoriesTypes.all,
  },
  {
    name: 'Acuarela',
    value: CategoriesTypes.acuarela,
  },
  {
    name: 'Cuadros',
    value: CategoriesTypes.cuadros,
  },
  {
    name: 'Papel Mache',
    value: CategoriesTypes.papelMache,
  },
  {
    name: 'Madera',
    value: CategoriesTypes.madera,
  }
];