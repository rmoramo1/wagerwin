import React from 'react';
import { Helmet } from 'react-helmet';

import about_1 from '../assets/img/about_1.jpg';
import about_2 from '../assets/img/about_2.jpg';
import about_3 from '../assets/img/about_3.jpg';
import about_4 from '../assets/img/about_4.jpg';
import about_5 from '../assets/img/about_5.jpg';
import about_6 from '../assets/img/about_6.jpg';
import about_7 from '../assets/img/about_7.jpg';

export default function About_Us() {
  return (
    <div className="container-fluid g-0">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us | Wager Win</title>
        <link rel="canonical" href="https://wagerwin.ag.com/poker" />
        <meta name="description" content="We created Wager Win to make online gambling fun and safe for everyone. We believe that gambling should be a fun and entertaining activity."></meta>
      </Helmet>
      <div className="slider slider_live_about center_text">
        <div className="container">
          <div className="col-lg-6 mx-auto text-white text-center">
            <p className="display-3 fw-bold font_shadow">About Us</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row g-0 shadow">
          <div className="col-lg-4">
            <div className="row g-0">
              <div className="col-6">
                <img src={about_1} alt="poker cards" className="img-fluid"></img>
              </div>
              <div className="col-6">
                <img src={about_4} alt="poker cards" className="img-fluid"></img>
              </div>
              <div className="col-6">
                <img src={about_2} alt="poker cards" className="img-fluid"></img>
              </div>
              <div className="col-6">
                <img src={about_3} alt="poker cards" className="img-fluid"></img>
              </div>
            </div>
          </div>
          <div className="col-lg-8 bg_orange center_text fs-4 text-white p-3">
            <div data-aos="zoom-in">
              <h1>OUR VISION</h1>
              <p>We created Wager Win to make online gambling fun and safe for everyone. We believe that gambling should be a fun and entertaining activity, not something that causes people to worry about complex betting platforms, lousy betting odds, bad customer service, and safety. We have created the best betting site in the industry to provide our users with a simple, safe, and enjoyable betting experience.</p>
              <p>
                At WagerWin, we believe that everyone deserves a chance to win big. We provide the most advanced betting technology so that our clients can enjoy themselves while they're winning. We're dedicated to giving our clients the most memorable and fun gambling experience of their lives.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container fs-3 py-5">
        <p>
          When it comes to finding a place to gamble online, few sites can compare to WagerWin. Whether your passion is sports, politics, entertainment, horse racing, or casino action, at WagerWin, we want to please you and offer you everything you need to make the most of your gambling experience.
        </p>
        <div className="divider"></div>
      </div>
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-4 p-2">
            <div className="card shadow" data-aos="flip-right">
              <img src={about_5} className="card-img-top" alt="basketball player" />
              <div className="card-body">
                <h5 className="card-title">We understand that everyone has different tastes in gambling</h5>
                <p className="card-text">Which is why we offer a wide range of options on our site. We know that our customers appreciate being able to find all of their favorite gambling activities in one place, and we work hard to make sure that our site is constantly updated with the latest offerings</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-2">
            <div className="card shadow" data-aos="flip-right">
              <img src={about_6} className="card-img-top" alt="basketball player" />
              <div className="card-body">
                <h5 className="card-title">Our sportsbook offers the best odds in all major sports and leagues</h5>
                <p className="card-text">This gives our customers a chance to win big and cash out on their bets. We offer various betting options, including the NBA, NHL, MLB, NCAA basketball and football, golf, soccer, boxing, and more. We strive to be the best gambling website and are always looking for ways to improve. If you're looking for a great place to bet on your favorite sports, look no further!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-2">
            <div className="card shadow" data-aos="flip-right">
              <img src={about_7} className="card-img-top" alt="basketball player" />
              <div className="card-body">
                <h5 className="card-title">In addition to offering a wide range of gambling options</h5>
                <p className="card-text">We also pride ourselves on providing excellent customer service. Our team is always available to answer any questions you may have or help you resolve any issues you may be experiencing.</p>
              </div>
              <div className="card-footer text-center">
                <a className="btn btn_orange" href="#">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4 fs-3 text-center">
        <div className="divider"></div>
        <p className="py-3">Welcome to Wager Win, and enjoy a fun and profitable gambling experience!</p>
        <div className="divider"></div>
      </div>
    </div>
  )
}
