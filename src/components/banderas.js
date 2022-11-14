import React from 'react';
import eng from '../assets/img/eng.png';
import esp from '../assets/img/esp.jpg';
import brz from '../assets/img/brz.webp'
import { useTranslation } from "react-i18next";
export default function Banderas() {
    const { t, i18n } = useTranslation("global");
    return (
        <div>
            <div className="banderas_eng">
                <div className="btn_banderas">
                    <a className="dropdown-item" href="#" onClick={() => i18n.changeLanguage("en")}> <img src={eng} className="img-fluid"></img> </a>
                </div>
            </div>
            <div className="banderas_es">
                <div className="btn_banderas">
                    <a className="dropdown-item" href="#" onClick={() => i18n.changeLanguage("es")}> <img src={esp} className="img-fluid"></img> </a>
                </div>
            </div>
            <div className="banderas_por">
                <div className="btn_banderas">
                    <a className="dropdown-item" href="#" onClick={() => i18n.changeLanguage("por")}> <img src={brz} className="img-fluid"></img> </a>
                </div>
            </div>
        </div>
    )
}
