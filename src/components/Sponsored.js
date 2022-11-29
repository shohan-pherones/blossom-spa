import { logos } from "../data/logos";

const Sponsored = () => {
  return (
    <section className="sponsored text-center py-20">
      <h3 className="section-title uppercase font-bold text-sm tracking-widest mb-5 opacity-50">
        Featured in
      </h3>
      <div className="sponsors flex gap-16 items-center justify-center">
        {logos.map((logo, i) => (
          <img src={logo} key={i} className="w-32 brightness-0 opacity-30" />
        ))}
      </div>
    </section>
  );
};

export default Sponsored;
