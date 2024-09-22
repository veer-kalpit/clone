import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/banner";
import Advantages from "./components/Advantages/advantages"
import Connect from "./components/Connect/connect"
import Contact from "./components/Contact/contact"

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Advantages />
      <Connect />
      <Contact />
    </div>
  );
};

export default App;
