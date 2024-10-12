import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Services/Service";
import Work from "./components/Work/Work";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
