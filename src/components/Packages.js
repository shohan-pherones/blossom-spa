import { packages } from "../data/packages";
import Package from "./Package";

const Packages = () => {
  return (
    <section className="packages-section container mx-auto py-20">
      <h3 className="section-title uppercase font-bold text-sm tracking-widest text-rose-400 mb-5 text-center">
        Popular packages
      </h3>
      <h2 className="main-headline text-3xl mb-20 text-center">
        Choose a suitable package, that fits you most
      </h2>
      <div className="packages flex flex-wrap gap-10 justify-center">
        {packages.map((packageItem) => (
          <Package key={packageItem.id} packageItem={packageItem} />
        ))}
      </div>
      <a
        href="#"
        className="text-center block mt-20 underline underline-offset-8"
      >
        View all packages &#129062;
      </a>
    </section>
  );
};

export default Packages;
