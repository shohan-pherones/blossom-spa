import { AiOutlineFieldTime } from "react-icons/ai";
import { TbHotelService } from "react-icons/tb";

const Package = ({ packageItem }) => {
  const currencyFormatter = (price) =>
    price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  return (
    <div className="package w-96 shadow-md bg-white rounded-lg overflow-hidden">
      <div className="img w-96">
        <img src={packageItem.img} alt={packageItem.title} />
      </div>
      <div className="texts p-8 flex flex-col gap-5">
        <h3 className="uppercase text-2xl font-medium">{packageItem.title}</h3>
        <p className="opacity-60 h-32">{packageItem.desc}</p>
        <ul>
          <li className="flex items-center gap-2">
            <span className="text-teal-500">
              <AiOutlineFieldTime />
            </span>{" "}
            {packageItem.feature1}
          </li>
          <li className="flex items-center gap-2">
            <span className="text-teal-500">
              <TbHotelService />
            </span>{" "}
            {packageItem.feature2}
          </li>
        </ul>
        <div className="purchase flex justify-between items-center">
          <p className="text-rose-400 font-medium">
            {currencyFormatter(packageItem.price)}
          </p>
          <a
            href="#"
            className="bg-gradient-to-br from-teal-500 to-teal-600 self-start text-teal-50 py-3 px-5 rounded-full shadow-xl shadow-teal-200/50"
          >
            Choose now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Package;
