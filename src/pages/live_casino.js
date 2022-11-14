import React from 'react';
import { Helmet } from 'react-helmet';

import live_ca from '../assets/img/live_ca.jpg';
import live_casino_2 from '../assets/img/live_casino_2.jpg'

export default function Live_Casino() {
  return (
    <div className="container-fluid g-0">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Live Casino | Wager Win</title>
        <link rel="canonical" href="https://wagerwin.ag.com/live_casino" />
        <meta name="description" content="Come experience our live casino. Feel the excitement of playing in a real casino with a live dealer.  What are you waiting for? Sign up now!"></meta>
      </Helmet>
      <div className="slider slider_live_casino center_text">
        <div className="container">
          <div className="col-lg-6 mx-auto text-white text-center">
            <p className="display-3 fw-bold font_shadow">Live Casino</p>
          </div>
        </div>
      </div>
      <div className="container py-5" data-aos="zoom-in-up">
        <div className="col-12 fs-3">
          <h1 className="text-center">Wager Win Live Casino</h1>
          <p>Is the perfect way to experience all the excitement of a Las Vegas casino floor without leaving your home. You can sit at virtual blackjack tables and play against real dealers, making it the perfect way to get your fix of casino action without having to travel.</p>
          <div className="divider"></div>
        </div>
      </div>
      <div className="container-fluid g-0 bg_green">
        <div className="row g-0">
          <div className="col-lg-6 p-lg-4 fs-3 text-white center_text" data-aos="fade-right">
            <p>
              The live casino experience is realistic and immersive, making it feel like you're in a real casino. You'll be able to interact with the dealers and other players and even chat with them in real-time.
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img src={live_ca} alt="dealer" className="img-fluid"></img>
          </div>
        </div>
      </div>
      <div className="container-fluid g-0 bg_orange">
        <div className="row g-0">
          <div className="col-lg-6 text-center">
            <img src={live_casino_2} alt="dealer" className="img-fluid"></img>
          </div>
          <div className="col-lg-6 p-lg-4 fs-3 text-white center_text" data-aos="fade-left">
            <p>
              Wager Win is the perfect place to go for an online gambling experience. The live dealers are top-notch, and the whole process of playing at a virtual table is a breeze, no matter your level of expertise. You can also take advantage of the many bonuses and promotions.
            </p>
          </div>
        </div>
      </div>
      <div className="container py-5" data-aos="zoom-out">
        <div className="col-12 fs-3 font_green">
          <p>Our live casino is the perfect way to get your dose of Las Vegas fun without having to leave home. With realistic graphics and an immersive atmosphere, you'll feel right in the middle of the action. So why not give it a try today?</p>
        </div>
        <div className="col-12 text-center pb-4">
          <a className="btn btn_gren" href="/bonus_promos">Register</a>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  )
}
