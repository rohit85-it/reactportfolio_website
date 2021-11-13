import React from 'react'
import "./intro.css"
import Me from "../../img/Me.png"

const intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Rohit Jindamwar</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Technophile</div>
                            <div className="i-title-item">Programmer</div>
                        </div>
                    </div>
                    {/* <p className="i-desc">I love to create websites.</p> */}
                </div>
            </div>
            <div className="i-right">
                
                    <div className="i-bg"></div>
                    <img className="i-img" src={Me} alt="" srcset="" />
                
            </div>

        </div>
    )
}

export default intro
