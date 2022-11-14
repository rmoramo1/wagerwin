import React from 'react';
import { useTranslation } from "react-i18next";
export default function Slider_Home_Big() {
    const { t } = useTranslation("global");
    return (
        <div className='col-12'>
            <div id="caroucell_big" className="carousel slide text-white font_shadow" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item slider1 active">
                        <div className="d-flex slider justify-content-center d-flex align-items-center">
                            <div className="text-center">
                                <h1 className="font_special">Enjoy our crypto and cash bonuses and start winning today!</h1>
                                <h3></h3>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item slider2">
                        <div className="d-flex slider justify-content-center d-flex align-items-center">
                            <div className="text-center">
                                <h1 className="font_special">Great casino games and prices!</h1>
                                <h3>Deposit today!</h3>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item slider3">
                        <div className="d-flex slider justify-content-center d-flex align-items-center">
                            <div className="text-center">
                                <h1 className="font_special">Fill the Live Betting action!</h1>
                                <h3></h3>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item slider4">
                        <div className="d-flex slider justify-content-center d-flex align-items-center">
                            <div className="text-center">
                                <h1 className="font_special">Don't miss the Soccer World Cup</h1>
                                <h3>Odds on all games!</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#caroucell_big" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#caroucell_big" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
