import { useEffect, useState } from "react";
import { useParams } from "@tanstack/react-router";
import { getProductById } from "../services/productService";
import type { Product } from "../types";

const ProductDetailPage = () => {

  const { productId } = useParams({ from: "/products/$productId" });
  const [product, setProduct] = useState<Product | null>(null);

  {/* INSTRUCCION: extraer este bloque a un custom hook */ }
  useEffect(() => {
    if (!productId) return;
    (async () => {
      const data = await getProductById(Number(productId));
      setProduct(data);
    })();
  }, [productId]);

  if (!product) return <p>Cargando detalle...</p>;

  return (
    <main>
      {/* INSTRUCCION: extraer este bloque a un componente de presentacion (ej: ProductDetailCard). */}
      <h2>{product.title}</h2>
      <p>ID: {product.id}</p>
      <p>Price: {product.price}</p>
      {/* Mostrar rating soportando diferentes shapes devueltos por la API */}
      {typeof product.rating === "number" ? (
        <p>Rating: {product.rating}</p>
      ) : product.rating && (product.rating as any).rate ? (
        <p>Rating: {(product.rating as any).rate}</p>
      ) : (
        <p>Rating: N/A</p>
      )}
    </main>
  );
};

export default ProductDetailPage;
