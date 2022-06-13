import React from "react";
import { scrollHandler } from "./utils";
import "./About.scss";

export default class About extends React.Component {
    render() {
        return (
            <div id="about" ref="about">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-2">
                            {/* <img src="./assets/img/me.jpg" className="about-img" draggable="false" /> */}
                            <img src="http://drewdud.com/assets/img/me.jpg" alt="me" className="about-img" draggable="false" />
                        </div>
                        <div className="col-xl-9">
                            <p className="page-title">
                                Hello
                            </p>
                            <span>
                                My name's Drew. I'm a front-end engineer based out of St. Louis, Missouri. I'm currently a senior 
                                frontend engineer at a company called <a href="https://tech.sagesure.com/" target="_blank" rel="noreferrer">SageSure</a> working 
                                mostly in React. Before that, I spent the first 5 years of my career working in Angular at&nbsp;
                                <a href="https://www.bullhorn.com/" target="_blank" rel="noreferrer">Bullhorn</a>. 
                                Some of my favorite things are playing music, watching movies, traveling, and programming. 
                                I built this small portfolio to network and connect with other developers. I originally wrote it in 
                                Angular, but then rewrote it in React. You can&nbsp;
                                {/* compare the perfomance differences <a href="" target="_blank">here</a>. */}
                                check out the source code <a href="https://github.com/DrewDudley/drewdud-react" target="_blank" rel="noreferrer">here</a> for a 
                                closer look under the hood. <a onClick={scrollHandler.bind(null, 'skills')} className="link">Keep scrolling</a> to see the languages, 
                                frameworks, and tools that I'm most comfortable with. The items marked with a * were used in developing this site.
                            </span>
                        </div>
                    </div>
                </div>
                <img src="http://drewdud.com/assets/img/connection.png" id="satellite" className="draggable" alt="satelite" />
            </div>
        )
    }
}