'use client'

import React, { createContext, useContext, useState, useMemo, useCallback, useEffect } from 'react';
import { Product } from '@/types/product';
import { fetchCatalogProducts, ProductDataSource } from '@/lib/dummyjson';
import { toast } from 'sonner';
import { init } from 'next/dist/compiled/webpack/webpack';

export interface ProductsReturn{
    products: Product[];
    isLoading: boolean;
    error: string | null;

    // Actions
    setDataSource: (source: ProductDataSource) => void;
    loadProducts: (source: string) => Promise<void>;
    addToCart: (product: Product) => void;
}

const ProductsContext = createContext<ProductsReturn | null>(null);

export interface ProductsProviderProps {
    children: React.ReactNode;
    initialProducts?: Product[];
}

export function ProductsProvider({ children, initialProducts = [] }: ProductsProviderProps) {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadProductsFromApi = useCallback(async (source: ProductDataSource) => {
        setIsLoading(true);
        setError(null);
        try {
            const fetchedProducts = await fetchCatalogProducts(source);
            setProducts(fetchedProducts.products);
            if (fetchedProducts.products.length === 0) {
                toast.info('No products returned from DummyJSON API.');
            }
        } catch (err) {
            const msg = err instanceof Error ? err.message : 'Failed to fetch products from DummyJSON';
            setError(msg);
            toast.error(msg);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (initialProducts.length === 0 ){
            loadProductsFromApi;
        }
    }, [initialProducts.length, loadProductsFromApi]);
}