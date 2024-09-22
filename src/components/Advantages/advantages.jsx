// import { useState } from "react";
import Hp from "../../assets/higher-profits.svg";
import Rs from "../../assets/robust-scaling.svg";
import Bs from "../../assets/best-selection.svg";

const advantages = () => {
  return (
    <div className="cointainer my-0 mx-auto py-[144px] px-[74px]  justify-center items-center">
      <div className="flex flex-row">
         <div className="p-5">
        <img src={Hp} alt="" className="w-[120px] h-[120px]" />
        <h4 className="font-bold text-[24px] leading-[32px] py-[32px]">
          Higher Profits
        </h4>
        <p className="text-[16px] leading-[23px]">
          We offer some of the lowest prices in the industry because print
          providers continuously compete to win your business.
        </p>
      </div>
      <div className="p-5">
        <img src={Rs} alt="" className="w-[120px] h-[120px]" />
        <h4 className="font-bold text-[24px] leading-[32px] py-[32px]">
          Robust Scaling
        </h4>
        <p className="text-[16px] leading-[23px]">
          Easily handle peak holiday seasons, with our wide network of partners
          and automatic routing functionality.
        </p>
      </div>
      <div className="p-5">
        <img src={Bs} alt="" className="w-[120px] h-[120px]" />
        <h4 className="font-bold text-[24px] leading-[32px] py-[32px]">
          Best Selection
        </h4>
        <p className="text-[16px] leading-[23px]">
          With 900+ products and top quality brands, you can choose the best
          products for your business
        </p>
      </div>
      </div>
      
    </div>
  );
};

export default advantages;
