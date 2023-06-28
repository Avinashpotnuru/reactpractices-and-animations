import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import ReactPaginate from "react-paginate";
const APITest2 = () => {
  const [dummyData, setDummyData] = useState([]);
  const [err, setErr] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 6;
  const [currentItems, setCurrentItems] = useState([]);

  const getDummyData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments/")
      .then((res) => {
        if (res.status) {
          setDummyData(res.data);
        }
        // console.log(res);
      })
      .catch((err) => {
        setErr(err.message);
        // console.log(err.message);
      });
  };
  // console.log("data", dummyData);

  useEffect(() => {
    getDummyData();
  }, []);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dummyData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(dummyData.slice(itemOffset, endOffset));

    setPageCount(Math.ceil(dummyData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, dummyData]);

  if (err) {
    return <h1 className="text-red-600">{err}</h1>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>APiTest2</h1>
      <div className="grid grid-cols-2 gap-3 mx-auto w-[90%] ">
        {currentItems.map((val, idx) => (
          <div key={idx} className="border-2 border-red-500 p-4 space-y-3 ">
            <Link href={`/testing-api/${val?.id}`}>
              <h1>name:{val?.name}</h1>
            </Link>
            <h1>email:{val?.email}</h1>
            <p className="text-center">{val?.body}</p>
          </div>
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        previousClassName="bg-red"
        containerClassName="paginationContainer"
        activeLinkClassName="activeLinkClassName"
      />
    </div>
  );
};

export default APITest2;
