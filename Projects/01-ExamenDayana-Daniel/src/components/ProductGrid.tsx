import { Link } from "@tanstack/react-router";
import type { Product } from "../types";

type Props = {
  products: Product[];
};

const ProductGrid = ({ products }: Props) => {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 12,
      }}
    >
      {products.map((product) => (
        <article
          key={product.id}
          style={{ border: "1px solid #444", padding: 10, borderRadius: 8 }}
        >
          {/* INSTRUCCION: ajustar renderizado de lista */}
          <h3>{product.title}</h3>
          <p>ID: {product.id}</p>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p>
          <Link to={"/products/$productId"} params={{ productId: String(product.id) }}>
            Ver detalle
          </Link>
          {/* INSTRUCCION: ajustar navegación al detalle */}
        </article>
      ))}
    </section>
  );
};

export default ProductGrid;

