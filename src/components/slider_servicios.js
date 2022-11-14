import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sportsbook from "../assets/img/servicios/sportsbook_images.jpg";
import onlinecasino from "../assets/img/servicios/onlineCasino.jpg";
import live_casino from "../assets/img/servicios/liveCasino.jpg";
import callcenter from "../assets/img/servicios/callCenter.jpg";
import horses from "../assets/img/servicios/horses.jpg";
import live_betting from "../assets/img/servicios/liveBetting.jpg";
import poker from "../assets/img/servicios/poker.jpg";
import prop_builder from "../assets/img/servicios/propBuilder.jpg";
export default function Slider_Servicios() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={1000}
            >
                <div className="col-12">
                    <div className="col-12 text-center bg_green text-white fs-3">Sportsbook</div>
                    <div className="col-12"><img src={sportsbook} atl="sportsbook" className="img-fluid"></img></div>
                </div>
                <div>
                    <div className="col-12 text-center bg_orange text-white fs-3">Online Casino</div>
                    <img src={onlinecasino} atl="onlinecasino" className="img-fluid"></img>
                </div>
                <div>
                    <div className="col-12 text-center bg_green text-white fs-3">Live Casino</div>
                    <img src={live_casino} atl="live_casino" className="img-fluid"></img>
                </div>
                <div>
                    <div className="col-12 text-center bg_orange text-white fs-3">Live Betting</div>
                    <img src={live_betting} atl="live_betting" className="img-fluid"></img>
                </div>
                <div>
                    <div className="col-12 text-center bg_green text-white fs-3">Horses</div>
                    <img src={horses} atl="horses" className="img-fluid"></img>
                </div>
                <div>
                    <div className="col-12 text-center bg_orange text-white fs-3">Poker</div>
                    <img src={poker} atl="poker" className="img-fluid"></img>
                </div>
                <div>
                    <div className="col-12 text-center bg_green text-white fs-3">Propn Builder</div>
                    <img src={prop_builder} atl="prop_builder" className="img-fluid"></img>
                </div>
                <div>
                    <div className="col-12 text-center bg_orange text-white fs-3">Call Center</div>
                    <img src={callcenter} atl="callcenter" className="img-fluid"></img>
                </div>
            </Carousel>;
        </div>
    )
}
