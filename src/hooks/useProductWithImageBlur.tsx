"use client"

import { useState, useEffect } from 'react';
import { type Product } from '@/types/product';
import getBase64 from '@/components/get-base64';

export const useProductWithImageBlur = (data: Product[]) => {
  const [productsWithBlur, setProductsWithBlur] = useState<Product[]>([]);

  useEffect(() => {
    if (!data || !Array.isArray(data)) return;

    const fetchProductsWithBlur = async () => {
      const promises = data?.map(async (item: Product) => {
        const blur = await getBase64(item.thumbnail);
        return {
         ...item,
          blurImage: blur,
        };
      });

      const results = await Promise.all(promises);
      setProductsWithBlur(results);
    };

    fetchProductsWithBlur();
  }, [data]);

  return productsWithBlur;
};