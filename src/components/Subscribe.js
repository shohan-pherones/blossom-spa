import subscribeImg from "../assets/imgs/subscribe.jpg";

const Subscribe = () => {
  return (
    <section className="newsletter-section container mx-auto py-20 grid grid-cols-2 gap-5 items-center">
      <div className="newsletter-l w-[80%] overflow-hidden relative">
        <img
          src={subscribeImg}
          alt="Calm African American female in bathrobe touching face against blue background"
        />
        <span className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-br from-rose-400 to-rose-700 opacity-10"></span>
      </div>
      <div className="newsletter-r flex flex-col gap-5">
        <h2 className="main-headline text-3xl">Subscribe to our newsletter</h2>
        <p className="opacity-60 w-4/5">
          The best offers and new product launches. Plus, a 10% off code for
          your first appointment.
        </p>
        <form className="flex gap-5 items-center mt-5">
          <input
            type="email"
            placeholder="Enter your email"
            className="py-4 px-8 rounded-md border outline-none"
          />
          <button
            type="submit"
            className="bg-gradient-to-br from-teal-500 to-teal-600 self-start text-teal-50 py-4 px-8 rounded-md shadow-xl shadow-teal-200/50"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
