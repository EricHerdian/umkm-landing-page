import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "@remixicon/react";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto px-10 py-5 bg-gradient-tb">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-sm">
        <div>
          <h1 className="text-lg font-semibold">Warung Nasi Ayam Bagan</h1>
          <p>Alamat: XXXXXXXX</p>
          <p>Telepon: XXXXXXXX</p>
          <p>Email: XXXXXXXX</p>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Jam Operasional</h1>
          <p>Senin - Jumat: 10.00 - 22.00</p>
          <p>Sabtu - Minggu: 09.00 - 23.00</p>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Social Media</h1>
          <span className="flex flex-row grid-5 items-center">
            <RiFacebookBoxFill size={24} />
            <p className="ml-2">Facebook</p>
          </span>
          <span className="flex flex-row grid-5 items-center">
            <RiInstagramFill size={24} />
            <p className="ml-2">Instagram</p>
          </span>
          <span className="flex flex-row grid-5 items-center">
            <RiTwitterXFill size={24} />
            <p className="ml-2">Twitter</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
