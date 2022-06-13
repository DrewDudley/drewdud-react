import React from "react";
import "./Portfolio.scss";
import { scrollHandler } from "./utils";
import Visibility from '@material-ui/icons/Visibility';

export default class Portfolio extends React.Component {
    render() {
        const projects = [
            {
                title: 'Holyfun Music',
                img: 'http://drewdud.com/assets/img/portfolio/holyfun-music.png',
                link: 'https://holyfunmusic.com'
            },
            {
                title: 'Bolivar Chamber of Commerce',
                img: 'http://drewdud.com/assets/img/portfolio/chamber.png',
                link: 'http://bolivarchamber.com'
            },
            {
                title: 'Shuffle Ninja',
                img: 'http://drewdud.com/assets/img/portfolio/ninja.png',
                link: 'http://drewdud.com/game/'
            },
            {
                title: 'NightLight Branson',
                img: 'http://drewdud.com/assets/img/portfolio/office.jpg',
                link: 'http://drewdud.com/nl/'
            },
            // {
            //     title: 'Lighthouse Investments',
            //     img: 'http://drewdud.com/assets/img/portfolio/lhInvestments.png',
            //     link: 'http://targetallocation.com'
            // },
          ];
        return (
            <div id="portfolio">
                <div id="section-header">
                    <p className="page-title">
                        My (very humble) portfolio
                    </p>
                    <span>
                        These are some pretty small projects I've worked on in the past that I really enjoyed. It's worth mentioning that some of the content and formatting has since
                        been altered after handing over admin rights to the respective organizations. Every site that I work on is
                        mobile-friendly and responsive, so feel free to resize your browser or open up dev tools. The more technical stuff that I've built and collaborated on
                        post-college have all been side projects that are in private repos and owned by SageSure, but I would be more that happy to talk about the specifics
                        with anyone interested. I'm always looking for fun challenges and freelance work, so if you think of something interesting to work on,&nbsp;
                        <a onClick={scrollHandler.bind(null, 'contact')} className="link">reach out to me</a>.
                    </span>
                </div>
                <div className="container">
                    <div className="row">
                        {projects.map(project => {
                            return (
                                <React.Fragment key={project.title}>
                                    <div className="col-sm-6 col-lg-3">
                                        <figure>
                                            <a href={project.link} target="_blank" rel="noreferrer">
                                                <img src={project.img} alt={project.title} className="image" />
                                                <figcaption>
                                                <div className="caption-content">
                                                    <Visibility />
                                                    <div className="title">{project.title}</div>
                                                </div>
                                            </figcaption>
                                            </a>
                                        </figure>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}