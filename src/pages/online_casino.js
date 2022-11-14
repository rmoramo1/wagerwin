import React from 'react';
import { Helmet } from 'react-helmet';

import win from "../assets/img/online_casino_win.jpg";
import slot_win from '../assets/img/win_fun_1.jpg';
import online from '../assets/img/online_casino_bg.jpg';

export default function Online_Casino() {
  return (
    <div className="container-fluid g-0">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Online Casino | Wager Win</title>
        <link rel="canonical" href="https://wagerwin.ag.com/online_casino" />
        <meta name="description" content="You can now play your favorite casino games online! Wager Win provides the best online gaming experience. Sign up now to get started!"></meta>
      </Helmet>
      <div className="slider slider_online_casino center_text">
        <div className="container">
          <div className="col-lg-6 text-white text-center">
            <h1 className="display-3 fw-bold font_shadow">Online Casino</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-lg-6 center_text p-lg-4" data-aos="fade-right">
            <p className="fs-3" >
              <h1>ENJOY IN OUR INCREDIBLE CASINO GAMES</h1>
              At Wager Win Casino, we believe that the online casino should be fun. We offer the best classic games like keno and blackjack and modern games like slots and video poker. Our goal is to provide the most fun experience for our customers.
            </p>
          </div>
          <div className="col-lg-6">
            <img src={win} className="img-fluid" alt="woman winning slot machine"></img>
          </div>
        </div>
      </div>
      <div className="container-fluid bg_orange py-5">
        <div className="col-lg-8 mx-auto fs-3 text-white" data-aos="zoom-in">
          <p>In our online casino, you'll find everything you can imagine. Our casino offers the best games in the industry with great bonuses and promotions. You'll find all your favorite games and some new ones you'll love. With our convenient online casino, you can play anytime, anywhere. </p>
        </div>
      </div>
      <div className="container">
        <div className="row g-0" data-aos="fade-right">
          <div className="col-lg-8 p-4 fs-3 center_text">
            <p>
              We take great care in choosing only the best games for our online casino. Our rigorous quality tests ensure that all our games offer you the most fun and best experience possible. Our online casino features only the highest quality games, so you can be sure to have a great time playing.
            </p>
          </div>
          <div className="col-lg-4">
            <img src={slot_win} alt="slot machine" className="img-fluid"></img>
          </div>
        </div>
        <div className="row g-0" data-aos="fade-left">
          <div className="col-lg-4">
            <img src={online} alt="slot machine" className="img-fluid"></img>
          </div>
          <div className="col-lg-8 p-4 fs-3 center_text">
            <p>
              The best online casino bonuses and promotions can be found at Wager Win. By playing with us, you will increase your fun and your chances of winning. There are no excuses not to play with us. We have the best games, the best customer service, and the best bonuses.
            </p>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="divider"></div>
        <div className="col-12 fs-3 fw-bold text-center font_green">
          <p>
            So come on over and join today!
          </p>
          <div className="col-12 text-cnter">
            <button className="btn btn_gren btn-lg">Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}
