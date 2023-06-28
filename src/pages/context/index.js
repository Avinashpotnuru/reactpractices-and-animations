import Cart from "@/components/Cart";
import Display from "@/components/Display";
import React, { createContext, useState } from "react";
export const contextStore = createContext();

const ContextPage = () => {
  const [data, setData] = useState([
    {
      name: "nokia",
    },
    {
      name: "samsung",
    },
  ]);

  const [count, setCount] = useState(0);

  return (
    <contextStore.Provider value={[data, setData, count, setCount]}>
      <div>
        <Display />
        <Cart />
      </div>
    </contextStore.Provider>
  );
};

export default ContextPage;
