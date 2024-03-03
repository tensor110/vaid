// import { it } from "node:test";
import React from "react";
import Image from "next/image";

export default function department() {
  const departmentItems = [
    {
      feature: "Painless Procedures",
      title: "Quick Examination",
      text: "Text For the mentioned service write here the content you want here to present.....",
      src: "../../public/image.jpg",
      sales: "15",
      original_price: "1648",
      discounted_price: "648",
    },
    {
      feature: "Cancer Care",
      title: "Online Appointment",
      text: "Text For the mentioned service write here the content you want here to present.....",
      sales: "15",
      original_price: "1648",
      discounted_price: "648",
    },
    {
      feature: "Best Dental Surgeons",
      title: "Emergency Case",
      text: "Text For the mentioned service write here the content you want here to present.....",
      sales: "15",
      original_price: "1648",
      discounted_price: "648",
    },
  ];
  return (
    <div className="bg-[#28a4a4] w-full h-[200vh] mt-[15%] px-[10%] pt-[10%]">
      <span className="text-white font-medium text-base">Practice Advice</span>
      <div className="text-white text-4xl font-bold mt-5 mb-5">
        Our Department
      </div>
      <p className="font-light text-base text-white w-[43%]">
        Text For the mentioned service write here the content you want here to
        present. Vaid is the fastest growing website for medical uses.
      </p>
      <div className="flex justify-between mt-[5%]">
        {departmentItems.map((item, index) => (
          <div
            key={index}
            className="bg-white w-[25vw] h-[120vh] flex flex-col"
          >
            <div>
              <Image
                alt="1"
                className="aspect-square absolute w-[25vw] h-[50vh] z-10"
                height="100"
                src="/image.jpg"
                width="350"
              />
              {/* <div className="absolute z-20 p-[1%]"> */}
                <span className="absolute z-20 bg-[#ff685b] text-white px-2 py-1 rounded">
                  Sale
                </span>
                <div className="absolute z-20 flex justify-between w-[10vw] items-end">
                    <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">1</div>
                    <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">2</div>
                    <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">3</div>
                {/* </div> */}
              </div>
            </div>
            <div className="pl-5 flex flex-col pt-8 mt-[50vh]">
              <span className="text-[#ff685b] font-medium text-base">
                {item.feature}
              </span>
              <span className="text-black font-bold text-lg">{item.title}</span>
              <p className="text-black font-light text-base">{item.text}</p>
              <div>
                <Image
                  alt="1"
                  className=""
                  height="200"
                  src="/image.jpg"
                  width="3"
                />
                <span className="text-[#c2c2c2] font-bold text-lg">
                  {item.sales} Sales
                </span>
              </div>
              <div>
                <span className="text-[#bdbdbd] font-bold text-lg">
                  ₹{item.original_price}
                </span>
                <span className="text-[#28a4a4] font-bold text-lg">
                  ₹{item.discounted_price}
                </span>
              </div>
              <button className="border-2 border-[#ff685b] rounded-full px-5 py-3 w-[50%]">
                Learn More {">"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}