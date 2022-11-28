import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app bg-gray-50 text-gray-700 min-h-screen text-xl">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
