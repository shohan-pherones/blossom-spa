import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sponsored from "./components/Sponsored";
import Features from "./components/Features";

const App = () => {
  return (
    <div className="app bg-gray-50 text-gray-700 min-h-screen text-xl">
      <Navbar />
      <Hero />
      <Sponsored />
      <Features />
    </div>
  );
};

export default App;
