import { contextStore } from "@/pages/context";
import React, { useContext, useState } from "react";

const Cart = () => {
  const [data, setData, count, setCount] = useContext(contextStore);

  //   console.log("contextStore", contextStore);

  const [add, setAdd] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setData([...data, { name: add }]);
    setAdd("");
  };
  return (
    <>
      <div>
        {count}
        {data.map((e) => (
          <h1>{e.name}</h1>
        ))}
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="enter name"
            value={add}
            onChange={(e) => setAdd(e.target.value)}
          />
          <button className="bg-red-300" type="submit">
            add
          </button>
        </form>
      </div>
    </>
  );
};

export default Cart;
