import { MdOutlineBathtub, MdOutlineTrain } from "react-icons/md";
import { IoMdBook } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";

const Features = () => {
  return (
    <section className="features-section container mx-auto py-20">
      <h3 className="section-title uppercase font-bold text-sm tracking-widest text-rose-400 mb-5">
        Why choose us
      </h3>
      <h2 className="main-headline text-3xl mb-20">Features that we provide</h2>
      <div className="features grid grid-cols-4 gap-5">
        {/* Feature 1 */}
        <div className="feature flex flex-col gap-3">
          <span className="w-14 h-14 bg-rose-200 rounded-full flex justify-center items-center text-3xl mb-5 text-rose-500">
            <MdOutlineBathtub />
          </span>
          <h3 className="main-headline text-xl">Comfortable</h3>
          <p className="opacity-60 w-4/5">
            Have a comfortable bathtub and toilet
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature flex flex-col gap-3">
          <span className="w-14 h-14 bg-rose-200 rounded-full flex justify-center items-center text-3xl mb-5 text-rose-500">
            <IoFastFoodOutline />
          </span>
          <h3 className="main-headline text-xl">Free Snacks</h3>
          <p className="opacity-60 w-4/5">
            Convenient service, get free snacks too
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature flex flex-col gap-3">
          <span className="w-14 h-14 bg-rose-200 rounded-full flex justify-center items-center text-3xl mb-5 text-rose-500">
            <IoMdBook />
          </span>
          <h3 className="main-headline text-xl">Easy Booking</h3>
          <p className="opacity-60 w-4/5">Easy to make an appointment</p>
        </div>

        {/* Feature 4 */}
        <div className="feature flex flex-col gap-3">
          <span className="w-14 h-14 bg-rose-200 rounded-full flex justify-center items-center text-3xl mb-5 text-rose-500">
            <MdOutlineTrain />
          </span>
          <h3 className="main-headline text-xl">Easy Access</h3>
          <p className="opacity-60 w-4/5">Easy and fast access to locations</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
