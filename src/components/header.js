
import logo from "../assets/img/logo.jpg";
import Banderas from "./banderas";

function Header() {
    return (
        <div className="container-fluid">
            {/* <Banderas/> */}
            <nav className="navbar navbar-expand-lg">
                <div className="row g-0">
                    <div className="col-11 col-lg-2">
                        <a className="navbar-brand" href="/">
                            <img src={logo} className="img-fluid"></img>
                        </a>
                    </div>
                    <div className="col-1 d-lg-none">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                    <div className="col-md-8 col-xl-7 d-flex align-items-center">
                        <div className="collapse navbar-collapse row" id="navbarNav">
                            <div className="col-12">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/sportsbook">Sportsbook</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/online_casino">Online Casino</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/racing">Racing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/live_betting">Live Betting</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="/live_casino">Live Casino</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="/poker">Poker</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="/bonus_promos">Bonus & Promos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="/about_us">About Us</a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="nav-link " href="/affiliate">Affiliate</a>
                                    </li> */}
                                    <li className="nav-item">
                                        <a className="nav-link " href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 d-none d-lg-block">
                                <div className="row g-0 text-center">
                                    <div className="col-6">
                                        <div className="row g-0">
                                            <div className="col-6">
                                                <div className="col-12">
                                                    Toll Free
                                                </div>
                                                <div className="col-12">
                                                    <a href="tel:+18889923891">1-888-992-3891</a>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="col-12">
                                                    Llama Gratis
                                                </div>
                                                <div className="col-12">
                                                    <a href="tel:+18889923891">01-800-099-0754</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 center_text">
                                        <a href="mailto:cs@wagerwin.ag">cs@wagerwin.ag</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-xl-3 center_text">
                        <div className="row">
                            <div className="col-12 pt-2">
                                <form id="login" name="LoginForm" action="javascript:void(0)" onSubmit="BackEndLogin(this); return false">
                                    <div className="row">
                                        <div className="col">
                                            <input name="username" type="text" className="form-control" placeholder="User" aria-label="USER" required />
                                        </div>
                                        <div className="col">
                                            <input type="password" name="password" id="password" className="form-control" placeholder="Password" autoComplete="on" aria-label="PASSWORD" required />
                                            <input type="hidden" name="idsite" value="XXX" />
                                            <input type="hidden" name="BackEndUrl" value="https://sports.wagerwin.ag" />
                                        </div>
                                    </div>
                                    <script src="https://images.betimages.com/Betslip/js/quick.login.min.js" type="text/javascript"></script>
                                </form>
                            </div>
                            <div className="col-12 pt-2">
                                <div className="row">
                                    <div className="col-6">
                                        <button type="submit" form="login" className="btn btn_orange col-12" id="btnLogin">Login</button>
                                    </div>
                                    <div className="col-6">
                                        <button type="botton" data-bs-toggle="modal" href="#registerModal" className="btn btn_orange col-12">Register</button>
                                    </div>
                                    {/* <div className="col-12 pt-1 fs-4 text-center">
                                        <div className="row g-0">
                                            <div className="col">
                                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                            </div>
                                            <div className="col">
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a href="#">
                                                    <i className="fa-brands fa-reddit-alien"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header;