import React from "react";
import "./Contact.scss";

export default class Contact extends React.Component {
    render() {
        const contactLinks: any[] = [
            {
                icon: 'fab fa-facebook-f',
                href: 'https://www.facebook.com/drew.dudley.161/',
                class: 'skill-link'
            },
            {
                icon: 'fab fa-twitter',
                href: 'https://twitter.com/drewdudleyyy/',
                class: 'skill-link'
            },
            {
                icon: 'fab fa-instagram',
                href: 'https://www.instagram.com/drewdudleyyy/',
                class: 'skill-link'
            },
            {
                icon: 'fab fa-linkedin-in',
                href: 'https://www.linkedin.com/in/drewdudley/',
                class: 'skill-link'
            },
            {
                icon: 'fab fa-github',
                href: 'https://github.com/DrewDudley/',
                class: 'skill-link'
            },
            {
                icon: 'far fa-envelope',
                href: 'mailto:drewdudley93@gmail.com',
                class: 'skill-link'
            },
            {
                icon: 'fas fa-chevron-up',
                href: '#intro',
                class: 'link'
            }
        ];
        return (
            <div id="contact">
                <div className="container">
                    <div className="row justify-content-center">
                    {contactLinks.map(link => {
                            return (<React.Fragment key={link.name}>
                                <div className="col-xl-1">
                                    <h4>
                                        <a href={link.href} className={link.class} target="_blank"><i className={link.icon}></i></a>
                                    </h4>
                                </div>
                            </React.Fragment>)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}