import { useEffect, useState } from "react";
import { useParams } from "@tanstack/react-router";
import { getProductById } from "../services/productService";
import type { Product } from "../types";

const ProductDetailPage = () => {
 
  const { id } = useParams({ from: "/products/$productId" });
  const [product, setProduct] = useState<Product | null>(null);

  {/* INSTRUCCION: extraer este bloque a un custom hook */}
  useEffect(() => {
    (async () => {
      const data = await getProductById(Number(id));
      setProduct(data);
    })();
  }, []);

  if (!product) return <p>Cargando detalle...</p>;

  return (
    <main>
      {/* INSTRUCCION: extraer este bloque a un componente de presentacion (ej: ProductDetailCard). */}
      <h2>{product.title}</h2>
      <p>ID: {product.id}</p>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
    </main>
  );
};

export default ProductDetailPage;
