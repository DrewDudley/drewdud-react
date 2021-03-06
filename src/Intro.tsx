import React from "react";
import "./Intro.scss";
import { scrollHandler } from "./utils";
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import CodeIcon from '@material-ui/icons/Code';
// import PaletteIcon from '@material-ui/icons/Palette';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DesktopWindows from '@material-ui/icons/DesktopWindows';

export default class Intro extends React.Component {
    getTime() {
        const hours = new Date().getHours();
        if (hours > 23 || hours < 3) {
            return 'Welcome. Where ya headed so late?';
        } else if (hours < 6) {
            return 'Sure is awfully early. Where to, cap?';
        } else if (hours < 12) {
            return 'Good morning. Where to, cap?';
        } else if (hours < 17) {
            return 'Good afternoon. Where to, cap?';
        } else {
            return 'Good evening. Where to, cap?';
        }
    }

    render() {
        return (
            <div id="intro">
                <div id="astronaut-container">
                    <img src="http://drewdud.com/assets/img/astronaut.png" id="astronaut" alt="astronaut" />
                </div>
                <div id="moon" className="draggable">
                    <div className="crater" id="crater1"></div>
                    <div className="crater" id="crater2"></div>
                    <div className="crater" id="crater3"></div>
                    <div className="crater" id="crater4"></div>
                    <div id="flag"></div>
                </div>
                <div id="mars" className="draggable">
                    <div className="mars-crater" id="crater5"></div>
                    <div className="mars-crater" id="crater6"></div>
                </div>
                <div id="content-container">
                    <div id="intro-content">
                        <h2>
                            Drew Dudley
                        </h2>
                        <p className="sub-title">
                            Frontend Engineer
                        </p>
                        <p id="greeting">
                            {this.getTime()}
                        </p>
                        <div className="menu">
                            <nav>
                                <ul>
                                    <li><a onClick={scrollHandler.bind(null, 'about')} className="link underline-link"><FingerprintIcon />About Me</a></li>
                                    <li><a onClick={scrollHandler.bind(null, 'skills')} className="link underline-link"><CodeIcon />My Skills</a></li>
                                </ul>
                                <ul>
                                    <li><a onClick={scrollHandler.bind(null, 'portfolio')} className="link underline-link"><DesktopWindows />My Work</a></li>
                                    <li><a onClick={scrollHandler.bind(null, 'contact')} className="link underline-link"><MailOutlineIcon />Contact Me</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}