import React from 'react';
import { Helmet } from 'react-helmet';

import horse1 from '../assets/img/horses_1.jpg';
import horse2 from '../assets/img/horses_2.jpg';
import horse3 from '../assets/img/horses_3.jpg';

export default function Racing() {
  return (
    <div className='container-fluid g-0'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Racing | Wager Win</title>
        <link rel="canonical" href="https://wagerwin.ag.com/racing" />
        <meta name="description" content="Welcome to the races! We are excited to have you join us. Be sure to place your bets and enjoy the race."></meta>
      </Helmet>
      <div className="slider slider_racing center_text">
        <div className="container">
          <div className="col-lg-6 text-white text-center">
            <p className="display-3 fw-bold font_shadow">Horse Racing</p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg_green fs-3 text-white py-3">
        <div className="col-lg-8 mx-auto" data-aos="zoom-in-up">
          <h1 className="text-center">A Betting Tradition</h1>
          <p>
            Horse racing is an extremely exciting sport to bet on, with the potential to make huge profits. However, many gambling sites are not very user-friendly, especially for novice gamblers. Wager Win is different, we provide clear and concise information that makes horse betting easy and fun for everyone.
          </p>
          <p>Wager Win is the perfect place to access the world's most famous horse races and bet on exciting events. With us, you'll always have something to bet on!</p>
        </div>
      </div>
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-4 p-2">
            <div className="card shadow" data-aos="flip-left">
              <img src={horse1} class="card-img-top" alt="horse race"></img>
              <div className="card-body">
                <p>
                  Horse racing is one of the world's oldest and most popular sports. Bettors love horse racing because there are various betting opportunities at multiple tracks from North America, South America, Europe, and Asia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-2" data-aos="flip-up">
            <div className="card shadow">
              <img src={horse2} class="card-img-top" alt="horse race"></img>
              <div className="card-body">
                <p>
                  If you're looking for an easy way to bet on horses, look no further than Wager Win. We offer the best odds, a friendly betting platform, and the best customer service so you can blast it and get a big win.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-2" data-aos="flip-right">
            <div className="card shadow">
              <img src={horse3} class="card-img-top" alt="horse race"></img>
              <div className="card-body">
                <p>
                  With us, horse betting online is simple, safe, and secure.
                </p>
              </div>
              <div className="card-footer text-center">
                <a className="btn btn_orange" href="#">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
