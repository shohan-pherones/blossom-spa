import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sponsored from "./components/Sponsored";

const App = () => {
  return (
    <div className="app bg-gray-50 text-gray-700 min-h-screen text-xl">
      <Navbar />
      <Hero />
      <Sponsored />
    </div>
  );
};

export default App;
