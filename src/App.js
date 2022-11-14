import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import Header from './components/header';
import Footer from './components/footer';
import Loading from './components/loading';

const Home = lazy(() => import('./pages/home'));
const Sportsbook = lazy(() => import('./pages/sportsbook'));
const Online_Casino = lazy(() => import('./pages/online_casino'));
const Racing = lazy(() => import('./pages/racing'));
const Live_Betting = lazy(() => import('./pages/live_betting'));
const Live_Casino = lazy(() => import('./pages/live_casino'))
const Poker = lazy(() => import('./pages/poker'));
const Bonus_Promos = lazy(() => import('./pages/bonus_promos'));
const About_Us = lazy(() => import('./pages/about_us'));
const Affiliate = lazy(() => import('./pages/affiliate'));
const Contact = lazy(() => import('./pages/contact'));
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/sportsbook" element={<Sportsbook />} />
            <Route path="/online_casino" element={<Online_Casino />} />
            <Route path="/racing" element={<Racing />} />
            <Route path="/live_betting" element={<Live_Betting />} />
            <Route path="/live_casino" element={<Live_Casino />} />
            <Route path="/poker" element={<Poker />} />
            <Route path="/bonus_promos" element={<Bonus_Promos />} />
            <Route path="/about_us" element={<About_Us />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
