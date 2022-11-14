import React from 'react';
import { Helmet } from 'react-helmet';

import live_betting from '../assets/img/live_betting.jpg';
import soccer_image from '../assets/img/live_betting_span_1.jpg';
import live_betting_span_2 from '../assets/img/live_betting_span_2.jpg';
import live_betting_span_3 from '../assets/img/live_betting_span_3.jpg'
export default function Live_Betting() {
  return (
    <div className="container-fluid g-0">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Live Betting | Wager Win</title>
        <link rel="canonical" href="https://wagerwin.ag.com/live_betting" />
        <meta name="description" content="Our live betting feature lets you make quick and easy bets right as the action unfolds. So don't miss out - join Wager Win today and start winning!"></meta>
      </Helmet>
      <div className="slider slider_live_betting center_text">
        <div className="container">
          <div className="col-lg-6 mx-auto text-white text-center">
            <h1 className="display-3 fw-bold font_shadow">Live Betting</h1>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="shadow rounded overflow-hidden" data-aos="flip-up">
          <div className="row g-0">
            <div className="col-lg-5">
              <img src={live_betting} className="" alt="live_betting" />
            </div>
            <div className="col-lg-7 center_text">
              <div>
                <h3 className="text-center">Live The Action In The Moment</h3>
                <p>Wager Win's live betting system offers you a fun and high-quality betting experience. You can bet on everything that happens in the game, and you can live the action as it unfolds.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-12">
          <div className="row g-0">
            <div className="col-lg-4 p-2">
              <div className="col-12">
                <div className="card shadow" data-aos="flip-left">
                  <img src={live_betting_span_2} className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">From wherever and whenever you want</h5>
                    <p className="card-text">With Wager Win, you can get in on the action no matter where you are. Whether you're at home or on the go, you can place your bets and watch the game unfold in real-time.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-2">
              <div className="col-12">
                <div className="card shadow" data-aos="flip-up">
                  <img src={soccer_image} className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Card with stretched link</h5>
                    <p className="card-text">If you have never made live bets, don't worry! At Wager Win, we offer a very intuitive and friendly system. In addition, our customer service staff is always available to help you with any questions you may have.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-2">
              <div className="col-12">
                <div className="card shadow" data-aos="flip-right">
                  <img src={live_betting_span_3} className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">So what are you waiting for?</h5>
                    <p className="card-text">Sign up today and start placing live bets on your favorite games!.</p>
                  </div>
                  <div className="card-footer text-center">
                    <a className="btn btn_orange" href="#">Register</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
