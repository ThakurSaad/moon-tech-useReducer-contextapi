import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Wishlist = () => {
  const {
    state: { loading, wishlist, error },
  } = useProducts();

  let content;

  if (loading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>Something went wrong</p>;
  }

  if (!loading && !error && wishlist.length === 0) {
    content = <p>Nothing to show. Wishlist is empty</p>;
  }

  if (!loading && !error && wishlist.length) {
    content = wishlist.map((product) => (
      <ProductCard key={product._id} product={product} />
    ));
  }

  return (
    <section>
      <h1>This is wishlist page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {content}
      </div>
    </section>
  );
};

export default Wishlist;
