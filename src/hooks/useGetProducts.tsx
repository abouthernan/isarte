// export useGetProducts custom hook
import { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import type { ProductProps } from '../constants';

export const useGetProducts = (selected: string) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/products`);
      const data = await response.json();
      const filteredData = data.filter((product: ProductProps) => product.category === selected || selected === 'all');

      if (!filteredData.length) {
        setError(true);
      } else {
        setError(false);
      }

      setProducts(filteredData);
      setLoading(false);
    };
    getProducts();

  }, [selected]);

  return { products, loading, error };
}