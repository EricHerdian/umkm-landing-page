import React from "react";
import FoodContainer from "./UI/FoodContainer";

const MenuContent = () => {
  return (
    <div id="menu" className="w-full pt-[10%]">
      <div className="w-full mt-[10%] sm:mt-[5%]">
        <h1 className="mb-10 text-4xl text-center text-c_white">Our Menu</h1>
        <div className="sm:flex sm:flex-col sm:items-center sm:gap-10">
          <FoodContainer
            foodName="Nasi Ayam Bagan Klasik"
            foodDescription="Nasi ayam Bagan klasik dengan potongan ayam yang juicy, disajikan dengan nasi hangat dan kuah kental khas Bagan. Paduan sempurna rasa gurih dan rempah yang membuatnya menjadi favorit."
            foodImageUrl="/menu-1.jpg"
            imageLeft={true}
          />
          <FoodContainer
            foodName="Nasi Ayam Goreng Crispy"
            foodDescription="Nikmati sensasi krispi pada potongan ayam yang digoreng sempurna, disajikan dengan nasi hangat dan sambal pedas yang menggugah selera. Cocok untuk pecinta ayam goreng!"
            foodImageUrl="/menu-2.jpg"
            imageRight={true}
          />
          <FoodContainer
            foodName="Nasi Ayam Bakar Madu"
            foodDescription="Potongan ayam yang dipanggang dengan madu spesial, disajikan dengan nasi hangat dan sayuran segar. Paduan manis dan gurih yang membuatnya selalu dinantikan."
            foodImageUrl="/menu-3.jpg"
            imageLeft={true}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuContent;
