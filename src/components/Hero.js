import heroImg1 from "../assets/imgs/hero-img-1.jpg";

const Hero = () => {
  return (
    <div className="hero-bg bg-teal-100/50">
      <div className="hero container mx-auto py-16 grid grid-cols-5 gap-5">
        <div className="hero-l col-span-3 flex flex-col gap-5">
          <h3 className="uppercase font-bold text-sm tracking-widest text-rose-400">
            Winter' 22
          </h3>
          <h1 className="main-headline text-6xl font-medium mb-5 text-transparent bg-clip-text bg-gradient-to-br from-teal-600 to-gray-600">
            Something serene for your body, mind, and spirit.
          </h1>
          <p>
            Don't neglect your body's natural needs, and let it be taken care of
            by us. We specialize in pampering and nurturing, so that your skin
            and body can be the best version of themselves.
          </p>
          <a
            href="#"
            className="bg-gradient-to-br from-teal-500 to-teal-600 self-start text-teal-50 py-3 px-5 mt-5 rounded-full shadow-xl shadow-teal-200/50"
          >
            Start beautify today
          </a>
          <p className="mt-5 text-sm opacity-50">
            So what are you waiting for? Register today and book an appointment
            with us anytime from anywhere.
          </p>
          <div className="followers flex gap-5 items-center mt-14">
            <p className="font-medium">
              We are loved by <span className="text-rose-400">10,000+</span>{" "}
              happy beauties
            </p>
            <div className="faces flex">
              <div className="face overflow-hidden w-10 h-10 rounded-full border-2 border-rose-400">
                <img src="https://randomuser.me/api/portraits/women/94.jpg" />
              </div>
              <div className="face overflow-hidden w-10 h-10 rounded-full border-2 border-rose-400 -ml-3">
                <img src="https://randomuser.me/api/portraits/women/17.jpg" />
              </div>
              <div className="face overflow-hidden w-10 h-10 rounded-full border-2 border-orange-500 -ml-3">
                <img src="https://randomuser.me/api/portraits/women/24.jpg" />
              </div>
              <div className="face overflow-hidden w-10 h-10 rounded-full border-2 border-rose-400 -ml-3">
                <img src="https://randomuser.me/api/portraits/women/89.jpg" />
              </div>
              <div className="face overflow-hidden w-10 h-10 rounded-full border-2 border-rose-400 -ml-3">
                <img src="https://randomuser.me/api/portraits/women/71.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-r col-span-2 flex justify-end">
          <div className="img w-[80%] overflow-hidden rounded-tl-full rounded-tr-full">
            <img
              src={heroImg1}
              alt="Calm black woman standing with flowers after spa procedure"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
