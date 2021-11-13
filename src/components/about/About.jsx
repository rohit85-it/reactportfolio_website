import React from 'react'
import "./about.css"
import Me2 from "../../img/Me2.jpg"
import { useContext } from "react"
import { ThemeContext} from "../../context"
const About = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        
        <div className="a">
            <div className="a-left">
                <div className="a-card bg" style={{backgroundColor:darkMode && "gray"}}></div>
                <div className="a-card">
                    <img src={Me2} alt="" className="a-img" />
                </div>
                
            </div>




            <div className="a-right">
                <h1 className="a-title">
                    About Me
                </h1>
                <h3 className="a-sub">undergrad</h3>
                <p className="a-desc">
                    I am Jindamwar Rohit, I live in a town called Dharmabad in Nanded district of Maharashtra. I am pursuing my B.Tech degree in Information Technology at Walchand College Of Engineering, Sangli.
                </p>
                <p className="a-desc">
                        I love to work on Frontend Developement and have relevant skills of web Developement.
                </p>
                <p className="a-desc">
                        Please let me know if any suggesions for my portfolio website. You can contact me through any of the social media platform provided at the bottom of the website.
                </p>
            </div>
        </div>
    )
}

export default About
