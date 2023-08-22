import { FC, useEffect } from 'react';

import type { ProductProps } from '../../constants';
import styles from './gallery.module.css';
import { useGetProducts } from '../../hooks/useGetProducts';
import Skeleton from '../shared/skeleton/Skeleton';

export interface GalleryProps {
  selected: string;
}

export const Gallery: FC<GalleryProps> = ({ selected }) => {

  const { products, loading, error } = useGetProducts(selected);

  useEffect(() => {

  }, [selected]);


  return (
    <nav className={`container ${styles.nav}`}>
      {
        loading ? <Skeleton /> : (
          error ? <p className={styles.error}>No hay obras en esta categoría 😓</p> :
            products
              .map(({ title, id, images }: ProductProps) => (
                <a
                  key={id}
                  className={styles.a}
                  href={`galeria/${title}`}
                  aria-label={`Navigate to ${title} gallery`}
                  title={title}
                >
                  <img
                    className={styles.img}
                    src={String(images[0].src)}
                    width="375"
                    alt={`Imagen de una de las obras de ${title}`}
                  />
                  <span className={styles.span}>{title}</span>
                </a>
              ))
        )
      }
    </nav>
  );
};
