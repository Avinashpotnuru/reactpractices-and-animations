import axios from "axios";
import React, { useEffect, useState } from "react";

const CheckPage = () => {
  const [products, setProductsData] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        if (res.status) {
          setProductsData(res.data);
        }

        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(products);

  return (
    <div>
      {products.map((val, idx) => (
        <h1 key={idx}>{val?.name}</h1>
      ))}
    </div>
  );
};

export default CheckPage;
