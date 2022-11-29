import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sponsored from "./components/Sponsored";
import Services from "./components/Services";
import Features from "./components/Features";
import Subscribe from "./components/Subscribe";

const App = () => {
  return (
    <div className="app bg-teal-50 text-gray-500 min-h-screen text-xl">
      <Navbar />
      <Hero />
      <Sponsored />
      <Services />
      <Features />
      <Subscribe />
    </div>
  );
};

export default App;
