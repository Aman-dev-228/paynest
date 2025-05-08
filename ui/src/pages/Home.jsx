import React from "react";
import Navbar from "../components/Navbar";
import HomeImage from "../assets/Home.jpg";
function Home() {
  return (
    <div
      className="bg-white m-auto lg:w-full"
      style={{
        backgroundImage: `url(${HomeImage})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="py-2 shadow-green-300 shadow-2xl lg:w-[75rem] m-auto ">
        <Navbar />
      </div>
      <div className="flex justify-between items-end lg:mt-25 flex-col">
        <div className="w-[23rem] sm:mt-5">
          <p className="text-3xl font-bold text-white lg:mr-15 font-sans">
            InfyMe Mobile
          </p>
        </div>
        <div className="flex bg-lime-200 w-[23rem] rounded-lg ml-220 mt-3 ">
          <p className="p-5 text-xl">How can we help you ? </p>
        </div>
        <div className="flex bg-lime-200 w-[23rem] mt-0.5 rounded-lg ml-220 ">
          <p className="p-5  text-xl font-stretch-expanded">
            Banking is the best way to save your money and get loan for your
            future.Now a days it is very easy to get loan from bank. InfyMe
            Mobile is one of the leading digital banking solutions in India.{" "}
          </p>
        </div>
        <div className=" lg:m-auto  flex-col  opacity-60 flex ">
          <h2 className="text-5xl font-bold text-green-600">
            Trust us and save your{" "}
            <h3 className="py-5 text-right"> money with us. </h3>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
