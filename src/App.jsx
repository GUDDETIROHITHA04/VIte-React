import {
  Nav,
  HeroSection,
  Brands,
  Featers,
  Textemonial,
  Featers2,
  Faq,
  Blog,
  Contact,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Brands />
      <div className="container mx-auto">
        <hr />
      </div>
      <Featers />
      <Textemonial />
      <Featers2 />
      <div className="container mx-auto">
        <hr />
      </div>
      <Faq />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
