import { Suspense, lazy } from "react";
import { Loader } from "./svg";
import "./App.css";

const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Header = lazy(() => import("./sections/Header"));
const Search = lazy(() => import("./sections/Search"));
const Badges = lazy(() => import("./sections/Badges"));
const Services = lazy(() => import("./sections/Services"));
const Products = lazy(() => import("./sections/Products"));
const WhyUs = lazy(() => import("./sections/WhyUs"));
const Choices = lazy(() => import("./sections/Choices"));
const PerfectWay = lazy(() => import("./sections/PerfectWay"));
const Blog = lazy(() => import("./sections/Blog"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex justify-center items-center">
          <Loader />
        </div>
      }
    >
      <Navbar />
      <Header />
      <Search />
      <Badges />
      <Services />
      <Products />
      <WhyUs />
      <Choices />
      <PerfectWay />
      <Blog />
      <Footer />
    </Suspense>
  );
}

export default App;
