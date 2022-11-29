import serviceImg1 from "../assets/imgs/service-1.jpg";
import serviceImg2 from "../assets/imgs/service-2.jpg";
import serviceImg3 from "../assets/imgs/service-3.jpg";

const Services = () => {
  return (
    <section className="services-section py-20 container mx-auto">
      <h3 className="section-title uppercase font-bold text-sm tracking-widest text-rose-400 mb-5">
        Services we provide
      </h3>
      <h2 className="main-headline text-3xl mb-20">
        Indulge yourself at one of our luxurious spa treatments
      </h2>
      <div className="services flex flex-col gap-40">
        {/* Service 1 */}
        <div className="service grid grid-cols-5 gap-5 items-center">
          <div className="service-l col-span-3 flex flex-col gap-5">
            <span className="text-9xl font-semibold opacity-20">01</span>
            <h2 className="main-headline text-2xl">Body massage & wellness</h2>
            <p className="w-4/5">
              Stressful days often lead to aching, tense muscles. This can be
              experienced in the neck, back, shoulders and feet. Head to our
              massage center for a refreshing relaxation session with our
              expertly trained therapists. Experience the power of our body
              massages with a combination of techniques such as Thai, Swedish
              and Shiatsu.
            </p>
            <p className="w-4/5">
              Experience the power of our body massages. With a combination of
              techniques such as Thai, Swedish and Shiatsu, you can give your
              weary body the TLC it deserves.
            </p>
          </div>
          <div className="service-r col-span-2 bg-teal-500">
            <img
              src={serviceImg1}
              alt="Topless Woman Lying on Bed Getting Massage"
            />
          </div>
        </div>

        {/* Service 2 */}
        <div className="service grid grid-cols-5 gap-5 items-center">
          <div className="service-l col-span-2">
            <img
              src={serviceImg2}
              alt="Woman Taking a Floral Bath and Listening to Music on Headphones"
            />
          </div>
          <div className="service-r col-span-3 flex flex-col gap-5 w-4/5 justify-self-end">
            <span className="text-9xl font-semibold opacity-20">02</span>
            <h2 className="main-headline text-2xl">
              Spa treatments for every day
            </h2>
            <p>
              We know how hectic life can be, and we want to help you find a
              little bit of peace. At Bespoke, we offer a wide variety of
              treatments, therapies and services to help you feel your best. We
              offer massage therapy, facials, meditation sessions and more to
              suit any need.
            </p>
            <p>
              Therapy has never been so relaxing. Spend the day at Bespoke's spa
              and rejuvenate your body, mind, and soul. Our serene setting is
              just the place to do it in, too.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="service grid grid-cols-5 gap-5 items-center">
          <div className="service-l col-span-3 flex flex-col gap-5">
            <span className="text-9xl font-semibold opacity-20">03</span>
            <h2 className="main-headline text-2xl">
              Beauty treatments that make you feel beautiful
            </h2>
            <p className="w-4/5">
              The best place to get beauty services in the neighbourhood. We
              offer a variety of services including waxing, facials and eyelash
              extensions that will help you feel confident and look good.
            </p>
            <p className="w-4/5">
              At our salon, we have a team of experts that can help you get the
              services you need to feel confident and look good. We offer a
              variety of services including waxing, facials and eyelash
              extensions.
            </p>
          </div>
          <div className="service-r col-span-2 bg-teal-500">
            <img src={serviceImg3} alt="Woman With White Facial Mask" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
