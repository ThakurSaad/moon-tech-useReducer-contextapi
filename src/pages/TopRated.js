import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const TopRated = () => {
  const {
    state: { loading, products, error },
  } = useProducts();

  let content;

  if (loading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>Something went wrong</p>;
  }

  if (!loading && !error && products.length === 0) {
    content = <p>Nothing to show. Product list is empty</p>;
  }

  if (!loading && !error && products.length) {
    content = products
      .filter((product) => product.rating > 3)
      .map((product) => <ProductCard key={product._id} product={product} />);
  }
  console.log(products);

  return (
    <section>
      <h1>This is top rated page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {content}
      </div>
    </section>
  );
};

export default TopRated;
