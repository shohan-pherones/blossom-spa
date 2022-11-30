import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { reviews } from "../data/reviews";
import { IoIosQuote } from "react-icons/io";
import "swiper/css";
import "swiper/css/effect-cards";

const Testimonials = () => {
  return (
    <section className="testimonials-section container mx-auto py-20">
      <h3 className="section-title uppercase font-bold text-sm tracking-widest text-rose-400 mb-5 text-center">
        Testimonials
      </h3>
      <h2 className="main-headline text-3xl mb-20 text-center">
        Meet our happy customers
      </h2>
      <div className="testimonials grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="testimonials-l flex flex-col gap-5 row-start-2 lg:row-start-auto">
          <h2 className="main-headline text-3xl mb-5 lg:w-4/5">
            We want you to come in to share in the joy of being yourself.⁣
          </h2>
          <p className="opacity-60 lg:w-4/5">
            We are excited to introduce to you the spa industry, where our
            AI-powered beauty assistant might be just what they need. With our
            beauty assistant, spas can stay up-to-date with their content
            strategy, boost client engagement and generate new leads.
          </p>
          <p className="opacity-60 lg:w-4/5">
            The spa industry is booming as people are striving for well-being
            and self-improvement. Unfortunately, many spas struggle with
            consistency in their content strategy and lack of time to generate
            new ideas for posts on social media.
          </p>
        </div>
        <div className="testimonials-r">
          <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
            {reviews.map((review) => (
              <SwiperSlide
                key={review.id}
                className="bg-white p-20 rounded-2xl border shadow-md"
              >
                <IoIosQuote className="mb-10 text-6xl text-teal-500" />
                <p className="mb-10">{review.text}</p>
                <div className="reviewer flex gap-5 items-center">
                  <div className="img h-20 w-20 rounded-full overflow-hidden">
                    <img src={review.img} />
                  </div>
                  <div className="profile">
                    <p className="text-2xl text-teal-500 font-medium uppercase tracking-widest">
                      {review.name}
                    </p>
                    <p className="capitalize opacity-60">
                      {review.designation}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
