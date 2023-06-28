import React from "react";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import {
  addNumber,
  minusNumber,
  displayNameHandler,
  backEndDataHandler,
} from "../../../store/slices/popups";

import { useState, useEffect } from "react";

const Counter = () => {
  const [fetchData, setFetchData] = useState([]);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.popups.count);

  const name = useSelector((state) => state.popups.displayName);

  const backEndData = useSelector((state) => state.popups.backEndData);

  console.log("backEndData", backEndData);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (res.status == 200) {
          setFetchData(res.data);
          dispatch(backEndDataHandler(res.data));
        }
        // console.log(res);
      })
      .catch((err) => {
        setError(true);
        console.log("err", err.message);
      });
  }, []);

  const handlerId = (id) => {
    console.log("id", id);
  };

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => dispatch(addNumber())}
          className="py-3 bg-green-200"
        >
          ADD
        </button>
        <button
          onClick={() => dispatch(minusNumber())}
          className="py-3 bg-red-300"
        >
          MINUS
        </button>
      </div>

      <div className="mt-10">
        <input
          onChange={(e) => dispatch(displayNameHandler(e.target.value))}
          type="text"
          placeholder="enter your name"
        />

        <h1>your name is {name} </h1>
      </div>

      <div>
        <h1>api calls</h1>
        {error ? <h1>check our api once</h1> : <h1>below data fetching</h1>}
        {backEndData?.length < 0 ? (
          <h1>loading</h1>
        ) : (
          backEndData?.map((val, idx) => (
            <li
              onClick={() => handlerId(idx)}
              key={idx}
              className={`border border-spacing-1 py-2 space-y-3 ${
                val?.completed ? "text-red-600" : "text-green-600"
              }`}
            >
              {val?.title}
            </li>
          ))
        )}
      </div>
    </>
  );
};

export default Counter;
