import { Suspense, lazy } from "react";
import { Loader } from "./svg";
import "./App.css";

const Navbar = lazy(() => import("./components/Navbar/Navbar"));

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
    </Suspense>
  );
}

export default App;
