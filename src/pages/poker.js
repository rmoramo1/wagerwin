import React from 'react';
import { Helmet } from 'react-helmet';

import poker_table from '../assets/img/poker_table.jpg';
import poker_chip_white from '../assets/img/poker_chip_white.png';

export default function Poker() {
  return (
    <div className="container-fluid g-0">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Poker | Wager Win</title>
        <link rel="canonical" href="https://wagerwin.ag.com/poker" />
        <meta name="description" content="If you're looking for excitement, adventure, and big winnings, come join us at Wager Win – the best online poker destination!"></meta>
      </Helmet>
      <div className="slider slider_live_poker center_text">
        <div className="container">
          <div className="col-lg-6 mx-auto text-white text-center">
            <p className="display-3 fw-bold font_shadow">Poker</p>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="card shadow rounded overflow-hidden" data-aos="flip-up">
          <div className="row g-0">
            <div className="col-lg-4">
              <img className="img-fluid" src={poker_table} alt="poker table"></img>
            </div>
            <div className="col-lg-8 fs-3 center_text text-center">
              <div>
                <h1>Poker is the king of casino games</h1>
                <p>
                  And at Wager Win, we offer you the best online gambling experience with action-packed poker rooms, big jackpots, and a wide variety of tournaments to choose from.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid g-0">
        <div className="row g-0" >
          <div className="col-lg-4 bg_orange center_text text-white fs-4 p-4">
            <div className="text-center">
              <img src={poker_chip_white} alt="poker_chip_white" className="img-fluid" data-aos="zoom-in"></img>
              <p>algun texto</p>
            </div>
          </div>
          <div className="col-lg-8 center_text fs-4 p-4" data-aos="fade-left">
            <p>
              <div className="divider mb-2"></div>
              No matter if you like Texas Hold 'em, No Limit Hold 'em, or any other poker variant, you'll find the poker action you need at Wager Win. Our wide selection of poker rooms offers something for everyone, from beginners to experts. With our easy-to-use software and friendly customer support, we make online poker fun and easy!
            </p>
          </div>
        </div>
        <div className="row g-0 bg_green">
          <div className="col-lg-4 img_span">

          </div>
          <div className="col-lg-8 center_text text-white fs-4 p-4" data-aos="fade-left">
            <div>
              <p>
                Plus, with our generous bonuses and promotions, you can boost your bankroll and take your game to the next level.
              </p>
              <p>If you're looking for excitement, adventure, and big winnings, come join us at Wager Win – the best online poker destination!</p>
              <div className="divider mt-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4 text-center">
        <div className="col-12">
          <p className="fs-3">Come on in and join the fun today!</p>
          <a className="btn btn_orange btn-lg">Register Now!</a>
        </div>
      </div>
    </div>
  )
}
