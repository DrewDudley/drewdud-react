import React from "react";
import { scrollHandler } from "./utils";
import "./About.scss";

export default class About extends React.Component {
    render() {
        return (
            <div id="about" ref="about">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-2 image-container">
                            {/* <img src="./assets/img/me.jpg" className="about-img" draggable="false" /> */}
                            <img src="http://drewdud.com/assets/img/me.jpg" alt="me" className="about-img" draggable="false" />
                        </div>
                        <div className="col-xl-9 text-content">
                            <p className="page-title">
                                Hello
                            </p>
                            <span>
                                My name's Drew. I'm a software developer based out of St. Louis, Missouri. I'm currently a senior 
                                frontend engineer at a company called <a href="https://tech.sagesure.com/" target="_blank" rel="noreferrer">SageSure</a> working
                                mostly in React. Before that, I spent the first 5 years of my career working in Angular at&nbsp;
                                <a href="https://www.bullhorn.com/" target="_blank" rel="noreferrer">Bullhorn</a>. 
                                Some of my favorite things are playing music, watching movies, traveling, and programming. I love all things UI. From subtle 
                                box-shadows and hover animations, to conveying information through logical content flow. From keeping the user engaged with clean 
                                and modern design, to the satisfaction of finally solving that obscure JavaScript bug, I love every step 
                                of the process. I built this small portfolio to network and connect with other developers, but also as a little bit of a playground for 
                                myself to practice different things. I originally wrote it in Angular, but recently rewrote it in React. You can&nbsp;
                                {/* compare the perfomance differences <a href="" target="_blank">here</a>. Feel free to */}
                                check out the source code <a href="https://github.com/DrewDudley/drewdud-react" target="_blank" rel="noreferrer">here</a> if
                                you want a closer look under the hood. <a onClick={scrollHandler.bind(null, 'skills')} className="link">Keep scrolling</a> to
                                see the languages, frameworks, libraries, and tools that I'm most comfortable with. The items marked with a * were used in developing this site.
                            </span>
                        </div>
                    </div>
                </div>
                <img src="http://drewdud.com/assets/img/connection.png" id="satellite" className="draggable" alt="satelite" />
            </div>
        )
    }
}