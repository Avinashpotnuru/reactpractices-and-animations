import React, { useContext, useState } from "react";
import { contextStore } from "@/pages/context";

const Display = () => {
  const [data, setData] = useContext(contextStore);
  console.log(data);
  return <div>number of items in cart :{data.length}</div>;
};

export default Display;
