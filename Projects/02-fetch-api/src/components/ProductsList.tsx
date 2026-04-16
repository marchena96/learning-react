import React, { useEffect, useState } from "react";

type ProductType = {
    id: number,
    title: string,
    price: number
}

const ListProducts = () => {

    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(
                result => {
                    setProducts(result.products)
                }
            );
    }, [])


    return (
        <>
            <div>
                {products.map((product: ProductType) => (
                    <div key={product.id}>
                        <span>product.title</span>
                        <span>product.price</span>


                    </div>
                )

                )}
            </div>
        </>
    )
}