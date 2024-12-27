import deleteIcon from "../assets/icon-delete.jpg";
import product1 from "../assets/image-product-1.jpg";
import * as Popover from "@radix-ui/react-popover";
// import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";
import { Shoe } from "../types/Shoe";

const PopOver = ({
  popOverOpen,
  setPopOverOpen,
  children,
  count,
  setCount,
}: {
  count: number;
  popOverOpen: boolean;
  storingData: Shoe[];
  selectedId: number;
  setCount: any;
}) => {
  // const counts = storingData.filter((item) => item.count);
  let productDetails = {
    id: 0,
    image: product1,
    price: "$125.00",
    name: "Fall Limited Edition Sneakers",
    count: count,
  };

  const handleDelete = () => {
    setCount(0);
  };

  const total =
    productDetails.count *
    parseFloat(productDetails.price.replace(/[^0-9.]/g, ""));

  // console.log(storingData);
  console.log(total);
  return (
    <Popover.Root open={popOverOpen}>
      <Popover.Trigger asChild>
        <button
          className="cursor-default items-center justify-center bg-white text-violet11 outline-none hover:bg-violet3"
          aria-label="Update dimensions"
        >
          {children}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className={`${styles.content} w-[330px] h-[220px] bg-white shadow-2xl p-4 rounded-lg max-sm:w-[350px] max-sm:mt-6 max-sm:mr-3`}
          // className={`${styles.Content}`}
          sideOffset={5}
        >
          <section>
            <p className="p-2 font-bold border-b border-gray-200">Cart</p>
            {productDetails.count > 0 && (
              <div className="flex items-center justify-between mt-4">
                {productDetails.image && (
                  <img
                    src={productDetails.image}
                    alt=""
                    className="w-[50px] rounded-md"
                  />
                )}
                <div>
                  <p className="text-gray-400 text-sm">{productDetails.name}</p>
                  <p className="text-gray-400 text-[15px]">
                    $125.00 x {productDetails.count}{" "}
                    <span className="text-black font-bold">
                      ${total.toFixed(2)}
                    </span>
                  </p>
                </div>
                <div>
                  <img
                    src={deleteIcon}
                    alt="delete"
                    className="w-[15px] object-contain cursor-pointer"
                    onClick={handleDelete}
                  />
                </div>
              </div>
            )}
            <div className="w-[full] mt-6 p-3 text-center bg-orange-400 rounded-lg">
              <Popover.Close className="border-none outline-none cursor-default items-center justify-center">
                <button
                  type="button"
                  className="font-bold text-black outline-none border-none bg-transparent"
                  onClick={() => setPopOverOpen(false)}
                >
                  Checkout
                </button>
              </Popover.Close>
            </div>
          </section>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default PopOver;
