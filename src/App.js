import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sponsored from "./components/Sponsored";
import Features from "./components/Features";
import Subscribe from "./components/Subscribe";

const App = () => {
  return (
    <div className="app bg-gray-50 text-gray-700 min-h-screen text-xl">
      <Navbar />
      <Hero />
      <Sponsored />
      <Features />
      <Subscribe />
    </div>
  );
};

export default App;
