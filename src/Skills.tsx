import React from "react";
import "./Skills.scss";

export default class Skills extends React.Component {
    render() {
        const skills = [
            {
                name: 'HTML/ HTML5*',
                img: 'http://drewdud.com/assets/img/skills/html5.png',
            },
            {
                name: 'CSS3/ SASS*',
                img: 'http://drewdud.com/assets/img/skills/sass.png',
            },
            {
                name: 'JavaScript/ TypeScript*',
                img: 'http://drewdud.com/assets/img/skills/ts.png',
            },
            {
                name: 'Angular',
                img: 'http://drewdud.com/assets/img/skills/angular.svg',
            },
            {
                name: 'React*',
                img: 'http://drewdud.com/assets/img/skills/react.png'
            },
            {
                name: 'Ionic',
                img: 'http://drewdud.com/assets/img/skills/ionic.png',
            },
            {
                name: 'Bootstrap*',
                img: 'http://drewdud.com/assets/img/skills/bootstrap.png',
            },
            {
                name: 'WordPress',
                img: 'http://drewdud.com/assets/img/skills/wordpress.png',
            },
            {
                name: 'Git*',
                img: 'http://drewdud.com/assets/img/skills/git.png',
            },
            {
                name: 'Google Analytics*',
                img: 'http://drewdud.com/assets/img/skills/analytics.png',
            },
            {
                name: 'Responsive Design*',
                img: 'http://drewdud.com/assets/img/skills/responsive.png',
            },
            {
                name: 'User-Experience*',
                img: 'http://drewdud.com/assets/img/skills/eye.png',
            },
            // {
            //     name: 'Guitar',
            //     img: 'http://drewdud.com/assets/img/skills/eye.png',
            // }
        ];

        const learningSkills = [
            {
                name: 'Jasmine & Karma',
                img: 'http://drewdud.com/assets/img/skills/jasmine.svg',
            },
            {
                name: 'Jest',
                img: 'http://drewdud.com/assets/img/skills/jest.svg',
            },
            {
                name: 'Node.js',
                img: 'http://drewdud.com/assets/img/skills/nodejs.svg',
            },
            {
                name: 'Spanish',
                img: 'http://drewdud.com/assets/img/skills/mexico.png',
            },
        ];

        const todoSkills = [
            {
                name: 'Vue.js',
                img: 'http://drewdud.com/assets/img/skills/vuejs.png'
            },
            {
                name: 'SEO',
                img: 'http://drewdud.com/assets/img/skills/google.png'
            },
            {
                name: 'German',
                img: 'http://drewdud.com/assets/img/skills/german.png'
            },
        ];

        return (
            <div id="skills">
                <p className="page-title">
                    These are a handful of my skills
                </p>
                <div className="container">
                    <div className="row">
                        {skills.map(skill => {
                            return (<React.Fragment key={skill.name}>
                                <div className="col-sm-4 col-lg-2 skill">
                                    <h4>
                                        <img src={skill.img} className="skill-img" alt={skill.name} draggable="false" />
                                    </h4>
                                    <span>
                                        {skill.name}
                                    </span>
                                </div>
                            </React.Fragment>)
                        })}
                    </div>
                </div>
                <hr />

                <p className="page-title">
                    These are some things that I'm learning
                </p>
                <div className="container">
                    <div className="row">
                        {learningSkills.map(skill => {
                            return (<React.Fragment key={skill.name}>
                                <div className="col-sm-4 col-lg-2 skill">
                                    <h4>
                                        <img src={skill.img} className="skill-img" alt={skill.name} draggable="false" />
                                    </h4>
                                    <span>
                                        {skill.name}
                                    </span>
                                </div>
                            </React.Fragment>)
                        })}
                    </div>
                </div>
                <hr />

                <p className="page-title">
                    And these are my TODOs
                </p>
                <div className="container">
                    <div className="row">
                        {todoSkills.map(skill => {
                            return (<React.Fragment key={skill.name}>
                                <div className="col-sm-4 col-lg-2 skill">
                                    <h4>
                                        <img src={skill.img} className="skill-img" alt={skill.name} draggable="false" />
                                    </h4>
                                    <span>
                                        {skill.name}
                                    </span>
                                </div>
                            </React.Fragment>)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}