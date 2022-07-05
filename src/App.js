import "./App.css";
import Banner from "./components/Banner";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import JoinJourney from "./components/JoinJourney";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import WhyTender from "./components/WhyTender";
import LoremIpsum from "./components/LoremIpsum";
import Tour from "./Tour";

function App() {
  return (
    <main className="App">
      {/* <Nav /> */}
      <div className="container">
        {/* <Banner />
        <HowItWorks />
        <WhyTender />
        <Faq /> */}
        <Tour />
      </div>
      {/* <JoinJourney />
      <Footer /> */}
      {/* <Slider />
      <LoremIpsum /> */}
    </main>
  );
}

export default App;
