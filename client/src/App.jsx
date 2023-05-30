import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import Register from "./components/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transaction from "./components/transaction/Transaction";
import AboutUs from "./components/about-us/AboutUs";
import NotFound from "./components/NotFound";
const App = () => (
  <div className="min-h-screen">
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <>
              <div className="gradient-bg-welcome">
                <Navbar />

                <Welcome />
                {/* <Transaction /> */}
              </div>

              <Services />
              <Transactions />
            </>
          }
        />
        <Route
          path="/Register"
          element={
            <div className="gradient-bg-welcome">
              <Navbar />
              <Register />
            </div>
          }
        />
        <Route
          path="/AboutUs"
          element={
            <div className="gradient-bg-welcome">
              <Navbar />
              <AboutUs />
            </div>
          }
        />
        <Route
          path="/Transactions"
          element={
            <div className="gradient-bg-welcome">
              <Navbar />
              <NotFound />
            </div>
          }
        />
        <Route
          path="/Wallets"
          element={
            <div className="gradient-bg-welcome">
              <Navbar />
              <NotFound />
            </div>
          }
        />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  </div>
);

export default App;
