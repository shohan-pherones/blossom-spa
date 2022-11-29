import { MdOutlineBathtub, MdOutlineTrain } from "react-icons/md";
import { IoMdBook } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";

const Features = () => {
  return (
    <section className="features-section container mx-auto py-32">
      <h3 className="section-title uppercase font-bold text-sm tracking-widest text-orange-500 mb-8">
        Why choose us
      </h3>
      <h2 className="main-headline text-5xl mb-24">Features that we provide</h2>
      <div className="features grid grid-cols-4 gap-5">
        {/* Feature 1 */}
        <div className="feature flex flex-col gap-2">
          <span className="w-14 h-14 bg-orange-200 rounded-full flex justify-center items-center text-3xl mb-5 text-orange-800">
            <MdOutlineBathtub />
          </span>
          <h3 className="main-headline text-3xl">Comfortable</h3>
          <p className="text-gray-500 w-4/5">
            Have a comfortable bathtub and toilet
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature flex flex-col gap-2">
          <span className="w-14 h-14 bg-orange-200 rounded-full flex justify-center items-center text-3xl mb-5 text-orange-800">
            <IoFastFoodOutline />
          </span>
          <h3 className="main-headline text-3xl">Free Snacks</h3>
          <p className="text-gray-500 w-4/5">
            Convenient service, get free snacks too
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature flex flex-col gap-2">
          <span className="w-14 h-14 bg-orange-200 rounded-full flex justify-center items-center text-3xl mb-5 text-orange-800">
            <IoMdBook />
          </span>
          <h3 className="main-headline text-3xl">Easy Booking</h3>
          <p className="text-gray-500 w-4/5">Easy to make an appointment</p>
        </div>

        {/* Feature 4 */}
        <div className="feature flex flex-col gap-2">
          <span className="w-14 h-14 bg-orange-200 rounded-full flex justify-center items-center text-3xl mb-5 text-orange-800">
            <MdOutlineTrain />
          </span>
          <h3 className="main-headline text-3xl">Easy Access</h3>
          <p className="text-gray-500 w-4/5">
            Easy and fast access to locations
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
