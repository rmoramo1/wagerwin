import React from 'react';
import logo_small from '../assets/img/logo_w.png';

export default function Footer() {
    let year = new Date();
    let rj = year.getFullYear();
    return (
        <div className="container-fluid bg_green footer">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-3">
                        <ul className="list-unstyled">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/sportsbook">Sportsbook</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/online_casino">Online Casino</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/racing">Racing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/live_betting">Live Betting</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/live_casino">Live Casino</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <ul className="list-unstyled">
                            <li className="nav-item">
                                <a className="nav-link " href="/poker">Poker</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/bonus_promos">Bonus & Promos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/about_us">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/affiliate">Affiliate</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-2 text-center">
                        <a href="/home">
                            <img src={logo_small} className="img-fluid" alt="logo small"></img>
                        </a>
                    </div>
                </div>
            </div>
            <div className='col-12 text-center text-white bg_green_dark py-3'>Copyright Wager Win {rj}</div>
        </div>
    )
}
