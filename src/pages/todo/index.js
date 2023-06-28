import React, { useState } from "react";

const TodoList = () => {
  const [phoneNumArray, setPhoneNumArray] = useState([]);
  const [user, setUser] = useState({ name: "", number: "" });
  const [editToggle, setEditToggle] = useState(true);

  const [updateItem, setUpdateItem] = useState(null);

  const [id, setId] = useState(null);

  const [nameErr, setNameErr] = useState("");
  const { name, number } = user;

  const eventHandler = (e) => {
    setUser({
      ...user,
      id: phoneNumArray.length,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name === "") {
      setNameErr("felid is empty");
    } else {
      setNameErr("");
    }

    const hasNullOrUndefinedKey = Object.values(user).some(
      (val) => val === null || val === undefined || val === ""
    );
    if (!hasNullOrUndefinedKey) {
      setPhoneNumArray([...phoneNumArray, user]);
      setUser({ name: "", number: "" });
    }

    console.log("phoneNumArray", phoneNumArray);
  };

  const updateHandler = (updateItem) => {
    console.log("hi");
    setEditToggle(true);
    const finalRes = phoneNumArray.map((item) => {
      if (item.id === updateItem.id) {
        return { ...item, ...updateItem };
      }
      return item;
    });
    setPhoneNumArray(finalRes);
    console.log("UPDATE", phoneNumArray);
  };

  const editHandler = (item) => {
    setEditToggle(false);
    setId(item.id);
    const data = phoneNumArray.find((e) => e.id === item.id);
    setUpdateItem(data);
    setUser({ ...user, name: item.name, number: item.number });

    console.log("data", data);
  };

  const deleteHandler = (id) => {
    setPhoneNumArray(phoneNumArray.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl mb-4 ">phone number</h1>
      <form onSubmit={submitHandler}>
        <h1 className="mb-2">name</h1>
        <input
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={eventHandler}
          name="name"
          value={name}
          type="text"
          placeholder="enter your name"
        />
        <br />
        {nameErr && (
          <div className="text-red-500  text-[10px] lg:text-sm">{nameErr}</div>
        )}
        <br />
        <h1 className="mb-2">phone number</h1>
        <input
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={eventHandler}
          name="number"
          value={number}
          type="number"
          placeholder="enter your phone number"
        />
        <br />
        {editToggle ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            type="submit"
          >
            add
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => updateHandler}
          >
            update
          </button>
        )}
      </form>

      {phoneNumArray.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-300 mt-7">
          <tr className="border border-1">
            <th className="px-4 py-2 border-b">name</th>
            <th className="px-4 py-2 border-b">number</th>
          </tr>

          {phoneNumArray?.map((item, idx) => (
            <tr className="" key={idx}>
              <td className="px-4 py-2 border-b text-center">{item?.name}</td>
              <td className="px-4 py-2 border-b text-center">{item?.number}</td>
              <td>
                <button
                  onClick={() => editHandler(item)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-4"
                >
                  edit
                </button>

                <button
                  onClick={() => deleteHandler(item.id)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      ) : (
        "No Data Found"
      )}
    </div>
  );
};

export default TodoList;
