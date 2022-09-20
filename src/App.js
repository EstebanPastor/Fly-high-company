import ScrollToTop from './components/ScrollToTop';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services'
import Recommend from './components/Recommend'
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <NavBar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
