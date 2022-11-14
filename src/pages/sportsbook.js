import React from 'react';
import lebron from '../assets/img/sportsbook_img_2.jpg';
import ft from '../assets/img/sportsbook_img.jpg';
import { Helmet } from 'react-helmet';


export default function Sportsbook() {
  return (
    <div className="container-fluid g-0">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sportsbook | Wager Win</title>
        <link rel="canonical" href="https://wagerwin.ag.com/sportsbook" />
        <meta name="description" content="Wager Win Sportsbook offers competitive odds and has a wide variety of markets for you to choose from. Sign up and play now!"></meta>
      </Helmet>
      <div className="slider_sportsbook slider center_text">
        <div className="container">
          <div className="col-lg-6 text-white text-center">
            <h1 className="display-3 fw-bold font_shadow">Sportsbook</h1>
          </div>
        </div>
      </div>
      <div className="container" data-aos="zoom-in-up">
        <div className="col-12 py-3">
          <h1 className="text-center">Premium Sports Odds</h1>
          <p className="fs-3">In our sportsbook, you will always find something to bet on! We have constantly updated lines and extensive betting markets for the main leagues like the NFL, NBA, MLB, and all kinds of sporting events like the ATP Tour, UEFA Champions League, and more. </p>
        </div>
      </div>
      <div className="container">
        <div className="col-12">
          <div className="row g-0">
            <div className="col-12 center_text fs-3" data-aos="fade-right">
              <p>
                Whether you're a seasoned sports bettor or just looking to have fun, we have the perfect betting options. Our classic parlays, over-under, and point spread bets offer something for everyone.
                <div className="divider"></div>
              </p>
            </div>
            <div className="col-12">
              <div className="row g-0">
                <div className="col-lg-6 p-2 fs-5" data-aos="fade-up">
                  <img src={lebron} className="img-fluid" alt="lebron james"></img>
                  <p>
                    For those looking for something a little more exciting, we have exotic and attractive prop bets that are sure to keep things interesting. So come on in and place your bets today!
                  </p>
                </div>
                <div className="col-lg-6 p-2 fs-5" data-aos="fade-left">
                  <p>
                    Wager Win is a convenient and easy way to place bets. You can make bets with us anytime and anywhere, as our betting systems are compatible with any device, from desktops to tablets and smartphones. With Wager Win, there is no need to worry about missing a bet or being unable to place a bet.
                  </p>
                  <img src={ft} className="img-fluid" alt="lebron james"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid cta_sportsbook" >
        <div className="container font_shadow py-4 fs-3 text-white" data-aos="zoom-in">
          <div className="col-12 ">
            <p>
              If you're looking for a reliable and secure sportsbook available 24/7, 365 days a year, look no further.
            </p>
            <p>We have the highest security standards in the industry, so you can focus on winning without worrying about your personal information. </p>
          </div>
          <div className="col-12 text-center">
            <a href="/#" className="btn btn_orange btn-lg">Register</a>
          </div>
        </div>
      </div>
      <div className="container fs-3 py-4">
        <div className="divider"></div>
        <p>Our convenient online betting platform allows you to place bets whenever suits you best. So why not give us a try today and see for yourself?</p>
      </div>
    </div>
  )
}
