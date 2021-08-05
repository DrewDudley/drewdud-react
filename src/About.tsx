import React from "react";
import "./About.scss";

export default class About extends React.Component {
    render() {
        return (
            <div id="about">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-2">
                            <img src="http://drewdud.com/assets/img/about_me.jpg" className="about-img" draggable="false" />
                        </div>
                        <div className="col-xl-9">
                            <p className="page-title">
                                Hello
                            </p>
                            <span>
                                My name's Drew. I'm a front-end developer based out of St. Louis, Missouri working daily in
                                the latest versions of Angular and Ionic at a company called&nbsp;
                                <a href="http://www.bullhorn.com" target="_blank">Bullhorn</a>. Some
                                of my favorite things are playing music,
                                watching movies, traveling, and programming. I built this small portfolio
                                to network and connect with other developers, as well as an excuse to play around more with Angular's CLI.
                                Check out the source code <a href="https://github.com/DrewDudley/drewdud" target="_blank">here</a> for a closer look under the hood.&nbsp;
                                <a href="#skills" className="link">Keep scrolling</a> to see the languages, frameworks, and tools that I know best. The items marked
                                with a * were used in developing this site.
                            </span>
                        </div>
                    </div>
                </div>
                <img src="http://drewdud.com/assets/img/connection.png" id="satellite" className="draggable" />
            </div>
        )
    }
}