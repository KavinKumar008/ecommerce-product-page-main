import cart from "../assets/icon-cart.jpg";
import avatar from "../assets/image-avatar.png";
import product1 from "../assets/image-product-1.jpg";
import { ShoeImage } from "../shoeimages/ShoeImage";
import plus from "../assets/icon-plus.jpg";
import minus from "../assets/icon-minus.jpg";
import { IoCartOutline } from "react-icons/io5";
import previous from "../assets/icon-previous.jpg";
import next from "../assets/icon-next.jpg";
import menu from "../assets/icon-menu.jpg";
import { useState } from "react";
import { Shoe } from "../types/Shoe";

const HomePage = () => {
  const [selectedImage, setSelectedImage] = useState<string | "">(product1);
  const [storingData, setStoringData] = useState<Shoe[] | []>([]);
  const [count, setCount] = useState<number>(1);

  const handleSelected = (item) => {
    console.log(item.id);
    setStoringData((prev) => {
      const isAlreadySelected = prev.some((shoe) => shoe.id === item.id);
      if (isAlreadySelected) {
        return prev.filter((shoe) => shoe.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const handleIncrement = () => {
    setCount((curr) => curr + 1);
  };

  const handleDecrement = () => {
    setCount((curr) => Math.max(curr - 1, 1));
  };

  const handleProfile = () => {
    console.log("hii kavin");
    setStoringData(storingData);
  };
  console.log(count);
  return (
    <main>
      <section className="flex justify-between items-center py-6 px-24  cursor-pointer border-b border-gray-300 max-sm:p-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-5">
            <img
              src={menu}
              alt="menubar"
              className="w-[18px] object-contain max-sm:visible cursor-pointer"
            />
            <h1 className="text-3xl font-bold tracking-tighter max-sm:text-4xl">
              sneakers
            </h1>
          </div>
          <div className="flex items-center gap-10 text-gray-500 font-medium max-sm:hidden">
            <p>Collections</p>
            <p>Men</p>
            <p>Women</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="flex gap-6">
          <img
            src={cart}
            alt="cartimg"
            className="w-[20px] h-auto object-contain max-sm:w-[25px]"
          />
          <img
            src={avatar}
            alt="profile"
            className={`w-[50px] h-auto max-sm:w-[35px] ${
              storingData
                ? "border-2 border-orange-600 rounder-full"
                : "border-transparent"
            }`}
            onClick={handleProfile}
          />
        </div>
      </section>
      <section className="flex p-8 max-sm:block max-sm:p-0">
        <div className="w-[50%] flex flex-col items-center justify-center gap-5 p-8 max-sm:w-screen max-sm:p-0 max-sm:gap-0">
          <div className="flex items-center justify-between absolute right-0 left-0">
            <img src={previous} alt="" className="w-[15px]" />
            <img src={next} alt="" className="w-[15px]" />
          </div>
          <img
            src={selectedImage}
            alt="pro1"
            className="w-[450px] rounded-2xl cursor-pointer max-sm:rounded-none relative"
          />
          <div className="flex gap-4 cursor-pointer">
            {ShoeImage.map((item) => (
              <div
                key={item.id}
                className=""
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt="shoeimage"
                  className={`w-[100px] rounded-lg max-sm:hidden ${
                    storingData?.some((shoe) => shoe.id === item.id)
                      ? "border-2 border-orange-500 opacity-20"
                      : "border-transparent"
                  }`}
                  onClick={() => handleSelected(item)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-[50%] p-20 flex flex-col gap-8 max-sm:w-full max-sm:p-4">
          <div className="max-sm:flex max-sm:flex-col max-sm:gap-4">
            <span className="text-gray-600 text-sm font-semibold tracking-widest">
              SNEAKER COMPANY
            </span>
            <h1 className="text-[2.5rem] font-bold max-sm:text-3xl">
              Fall Limited Edition <br /> Sneakers
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-gray-500 text-[15px]">
              These low profile sneakers are your perfect casual wear
              companion.Featuring a durable rubber outer sole,theay'll withstand
              everything the waether can offer.
            </p>
            {/* </div> */}
            <div className="flex flex-col gap-6 max-sm:flex-row max-sm:justify-between max-sm:px-1">
              <div className="flex items-center gap-6">
                <span className="text-3xl font-bold">$125.00</span>
                <span className="bg-black text-white text-sm font-semibold p-1 px-3 rounded-lg">
                  50%
                </span>
              </div>
              <div>
                <span className="text-gray-600 line-through font-semibold max-sm:text-lg">
                  $250.00
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-6 max-sm:p-4 max-sm:flex-col">
            <div className="w-[150px] flex justify-between items-center bg-slate-100 p-2 rounded-lg max-sm:w-full max-sm:p-3">
              <img
                src={minus}
                alt="minus"
                className="w-[12px] object-contain cursor-pointer"
                onClick={handleDecrement}
              />
              <p className="font-semibold">{count}</p>
              <img
                src={plus}
                alt="plus"
                className="w-[12px] object-contain cursor-pointer"
                onClick={handleIncrement}
              />
            </div>
            <div className="w-[200px] flex items-center justify-center gap-3 bg-orange-400 p-2 rounded-lg cursor-pointer max-sm:w-full max-sm:p-3">
              <IoCartOutline className="font-medium" />
              <p className="text-sm font-semibold">Add to cart</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
