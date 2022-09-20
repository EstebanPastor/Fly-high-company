import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Recommend from "./components/Recommend";
import Footer from "./components/Footer";
import DarkModeButton from "./components/DarkModeButton";

function App() {
  return (
    <>
      <DarkModeButton />
      <ScrollToTop></ScrollToTop>
      <NavBar />
      <Hero />
      <Services />
      <Recommend />

      <Footer />
    </>
  );
}

export default App;
