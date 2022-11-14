import React from 'react';
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import Slider_Home_Big from "../components/slider_home_big";
import Slider_Servicios from '../components/slider_servicios';
import favorite from "../assets/img/favorite_player.jpg";
import save_img from "../assets/img/safe_image_1.jpg";
import winMoney from "../assets/img/win-money-1.jpg";
import win_big from "../assets/img/win_big.jpg";

function Home() {
  const { t } = useTranslation("global");
  return (
    <div className="container-fluid g-0">

      <Slider_Home_Big />
      <div className="container py-5 fs-3" data-aos="zoom-in-up">
        <h1 className="text-center">Wager Win</h1>
        
           <p>The premier destination for sports fans looking for a friendly online betting experience. With a user-friendly interface and a wide range of betting options. The perfect betting platform for sports fans to get on the action.</p>
      </div>
      <div className="container-fluid g-0 bg_green">
        <div className="row g-0">
          <div className="col-lg-6 p-4 center_text text-white">
            <h3 data-aos="zoom-in">
              Whether you're looking to bet on your favorite team or player or want to get in on the excitement of the game, we've got you covered.
            </h3>
          </div>
          <div className="col-lg-6 text-center">
            <img src={favorite} alt="basketball player" className="img-fluid"></img>
          </div>
        </div>
      </div>
      <div className="container-fluid  bg_orange">
        <div className="row g-0">
          <div className="col-lg-6 text-center">
            <img src={save_img} alt="Woman with tablet" className="img-fluid"></img>
          </div>
          <div className="col-lg-6 center_text text-white fs-4">
            <p data-aos="zoom-in">
              We accept all the most popular payment methods in the betting industry, but we stand out for being one of the best online bitcoin sportsbooks you can find. We offer a wide range of markets, competitive odds, and a user-friendly platform. You can bet on all your favorite sports with us, including football, basketball, baseball, and more.
            </p>
          </div>
        </div>
      </div>
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-6" data-aos="zoom-in-right">
            <div className="col-12">
              <img src={winMoney} alt="woman win" className="img-fluid"></img>
            </div>
            <div className="col-12 fs-4">
              <p>
                When betting with us, you can get fast payments without complications. This means that you can enjoy your winnings without setbacks or delays. Our betting platform is easy to use and has various games to choose from.
              </p>
            </div>
          </div>
          <div className="col-lg-6 fs-4" data-aos="zoom-in-left">
            <div className="col-12">
            </div>
            <div className="col-12 fs-4">
              <p>
                We are more than just a betting site; we are an entertainment hub where you can have fun and win big with our sportsbook, online casino, live betting, and much more. We offer a safe and secure environment for our players to enjoy their favorite games. So come and join us today and see why we are the best in online gaming.
              </p>
            </div>
            <img src={win_big} alt="woman win" className="img-fluid"></img>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row g-0">
          <div className="divider"></div>
          <div className="col-12 text-center py-3">
            <h2 className="font_green">Register now and have the fun of your life!</h2>
            <button className="btn btn-lg btn_orange">Register</button>
          </div>
          <div className="divider"></div>
        </div>
      </div>
      <div className="container-fluid py-5" data-aos="fade-up">
        <div className="col-12 text-center py-3 font_green">
          <h2>Betting Options & Services</h2>
        </div>
        <Slider_Servicios />
      </div>
    </div>
  )
};

export default Home;
