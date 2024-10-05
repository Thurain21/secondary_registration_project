import React, { useEffect, useState } from "react";

function SampleAPI() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .catch((error) => console.log(error.message));
    setProducts(data);
    console.log(products);
  };
  useEffect(() => {
    fetchData();
  },[]);
  return (
    <div>
      <h1>All Products</h1>
      <div>
        {products.map((product) => (
          <li key={product.title}>{product.title}</li>
        ))}
      </div>
    </div>
  );
}

export default SampleAPI;
