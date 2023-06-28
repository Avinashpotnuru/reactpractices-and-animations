import React from "react";

const Task9 = () => {
  return (
    <div className="grid grid-cols-2  ">
      {[...Array(6)].map((e, index) => (
        <div className="my-4">
          <h1>{`paragraph ${index + 1}`}</h1>
        </div>
      ))}
    </div>
  );
};

export default Task9;
