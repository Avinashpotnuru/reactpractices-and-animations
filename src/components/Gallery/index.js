import React, { useState } from "react";

const Gallery = () => {
  return (
    <div className=" mt-6 flex  w-full relative  ">
      <div className="flex flex-col w-[75%] bg-red-500  ">
        <div className="flex">
          <img className="h-[350px] w-[250px]" src="/images/galleryimg1.png" />
          <div>
            <img
              className="mx-auto pt-3 h-[55px] w-[52px]"
              src="/images/arrow.png"
            />
            <img
              className="h-[300px] w-[250px] "
              src="/images/galleryimg2.png"
            />
          </div>
          <div className="flex flex-col">
            <img
              className="h-[97px] w-[72px] self-end"
              src="/images/stars.png"
            />

            <img className="" src="/images/galleryimg3.png" />
          </div>
        </div>
        <div className="flex items-center justify-between  ">
          <h1 className="text-[140px] ml-40 font-[600] text-[#CFEBC6]   ">
            Gallery
          </h1>
          <img className="self-end " src="/images/love.png" />
        </div>
        <div className="relative  bg-gray-700 w-full ">
          <img
            className="absolute h-[200px] w-[200px] top-[120px] "
            src="/images/galleryimg7.png"
          />
          <img
            className="absolute left-[120px] h-[200px] w-[200px]  "
            src="/images/galleryimg8.png"
          />
          <img
            className="absolute object-cover h-[200px] w-[200px] left-[240px] top-[130px]  "
            src="/images/galleryimg9.png"
          />
          <img
            className="absolute  left-[380px]  h-[200px] w-[200px]  "
            src="/images/galleryimg10.png"
          />

          <img
            className="absolute  left-[610px] top-[90px] h-[250px] w-[380px]  "
            src="/images/galleryimg11.png"
          />
        </div>
      </div>
      <div className=" w-[25%] bg-green-200  ">
        <img
          className="absolute  top-[10px] h-[250px] w-[250px] "
          src="/images/galleryimg4.png"
        />
        <img
          className="absolute  top-[220px] h-[250px] w-[250px] "
          src="/images/galleryimg5.png"
        />
        <img
          className=" absolute  top-[420px] h-[250px] w-[250px] "
          src="/images/galleryimg6.png"
        />
      </div>
    </div>
  );
};

export default Gallery;
