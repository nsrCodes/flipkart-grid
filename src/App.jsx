import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
// components
import Footer from './components/Common/Footer';
import Nav from './components/Navbar/Nav';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import UserPage from './pages/UserPage';

function App() {
  const [count, setCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  return (
    <div className="relative min-h-screen bg-white lg:grid lg:grid-rows-[1fr_auto]">
      <Nav savedCount={savedCount} setSavedCount={setSavedCount} />
      <div className="mx-auto mt-10  max-w-6xl">

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route path="/settings" element={<Settings />} /> */}
          {/* <Route path="/seismic" element={<Seismic />} /> */}
          <Route path="/product" element={<ProductPage count={count} setCount={setCount} setSavedCount={setSavedCount} />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;