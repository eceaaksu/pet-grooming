import React from "react";
import Logo from "../assets/img/logo-white.svg";
import { social } from "../data";

const Footer = () => {
  return (
    <footer className="bg-orange py-8 lg:pu-4">
      <div className="container mx-auto">
        <div className="flex text-white flex-col gap-y-6 lg:flex-row items-center justify-between">
          <img src={Logo} alt="logo" />
          <div className="text-[15px]">&copy; 2022 All rights reserved</div>
          <div className="flex gap-x-4">
            {social.map((item, index) => {
              return (
                <a key={index} href={item.href}>
                  <div className="bg-[#fe8d71a9] hover:bg-[#fe8d71] w-10 h-10 rounded-full flex justify-center items-center transition text-2xl ">
                    {item.icon}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
