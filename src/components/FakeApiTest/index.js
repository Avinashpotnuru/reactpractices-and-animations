import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const FakeTestingApi = ({ pageId }) => {
  const [singleData, setSingleData] = useState([]);

  const getSingleData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${pageId}`)
      .then((res) => {
        console.log(res.data);
        setSingleData(res.data);
        console.log("s", singleData);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSingleData();
  }, []);
  console.log(pageId);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" flex flex-col space-y-4 border-2 border-red-200">
        <Link className="self-end" href={"/testing-api"}>
          <AiOutlineClose />
        </Link>
        <h1>{singleData.name}</h1>
        <h1>{singleData.email}</h1>
        <h1>{singleData.body}</h1>
      </div>
    </div>
  );
};

export default FakeTestingApi;
