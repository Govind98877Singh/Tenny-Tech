import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterCom from "./components/FooterCom";
import ScrollToTop from "./components/ScrollToTop";
import RoutesComponent from "./components/RoutesComponent";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Scroll reset on route change */}
      <div id="root" className="flex flex-col min-h-screen">
        <Navbar /> {/* Navbar appears on all pages */}
        <div className="main-content flex-grow">
          <RoutesComponent /> {/* Use RoutesComponent here */}
        </div>
        <FooterCom /> {/* Footer appears on all pages */}
      </div>
    </Router>
  );
}

export default App;
