import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Apis = () => {
  const [data, setData] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(true);

  const [searchInput, setSearchInput] = useState("");

  const getData = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setLoading(true);

        if (res.status) {
          console.log(res);
          setData(res.data.products);
          setLoading(false);
        } else {
          console.log("check api once");
        }
      }, [])
      .catch((err) => setErrorMessage(err.message));
  };
  useEffect(() => {
    getData();
  }, []);

  console.log("data", data);

  const searchHandler = () => {
    console.log("hii");
    // axios
    //   .get(`https://dummyjson.com/products/search?q=${searchInput}`)
    //   .then((res) => {
    //     setLoading(true);

    //     if (res.status) {
    //       console.log(res);
    //       setData(res.data.products);
    //       setLoading(false);
    //     } else {
    //       console.log("check api once");
    //     }
    //   }, [])
    //   .catch((err) => setErrorMessage(err.message));
  };

  if (errorMessage) {
    return <h1 className="text-red-600 mx-auto">{errorMessage}</h1>;
  }
  return (
    <div>
      <div className="flex justify-center items-center mx-auto my-5">
        <input
          type="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search"
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          onClick={searchHandler}
        >
          search
        </button>
      </div>
      {loading && <h1>loading....</h1>}
      {data.length <= 0 ? (
        <h1 className="text-5xl text-center text-red-500 mx-auto">no data</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {data?.map((val, idx) => {
            return (
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-1/2"
                    src={val?.images[0]}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {val?.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {val?.description}
                  </p>
                  <Link
                    href={`/${val.title}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Apis;
