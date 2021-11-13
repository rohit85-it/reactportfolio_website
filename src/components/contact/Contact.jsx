import "./contact.css";
import Twitter from "../../img//twitter.png"
import Github from "../../img//github.png"
import Linkedin from "../../img//linkedin.png"
import Email from "../../img//email.png"
import { useRef } from "react";
import { useState } from "react";
import emailjs from 'emailjs-com';
import { useContext } from "react"
import { ThemeContext } from "../../context"

const Contact = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [done, setDone] = useState(false)
    const formRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();

        var empt = document.forms["form1"]["user_name"].value;
        var empt2 = document.forms["form1"]["user_subject"].value;
        var empt3 = document.forms["form1"]["user_email"].value;
        var empt4 = document.forms["form1"]["message"].value;
        if (empt === "" || empt2===""|| empt3 === "" || empt4==="") {
            alert("Please input a Value");
            return false;
        }



        emailjs.sendForm('service_4yzpgq2', 'template_sefm4um', formRef.current, 'user_wFFpHzDYujxqZCeRSEsFD')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });

        
    }

    return (
        <div className="c">
            <div className="c-bg" ></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Know More About Me
                    </h1>
                    <div className="c-info">

                        <div className="jm-logo ">
                            <a className="git" href="https://github.com/rohit85-cmd" target="_blank" rel="noreferrer">
                                <img src={Github} alt="" />
                            </a>
                            <a className="link" href="https://www.linkedin.com/in/rohit-jindamwar-644260194/" target="_blank" rel="noreferrer">
                                <img src={Linkedin} alt="" />
                            </a>
                            <a className="twitt" href="https://twitter.com/RohitJindamwar" target="_blank" rel="noreferrer">
                                <img src={Twitter} alt="" />
                            </a>
                            <a className="mail" href="mailto: rohitjindamwar123@gmail.com" target="_blank" rel="noreferrer">
                                <img src={Email} alt="" />
                            </a>
                        </div>
                        <div className="c-email"><h3>rohit.jindamwar@walchandsangli.ac.in</h3></div>
                        <div className="c-phone">(+91) 9146198909</div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Get in touch!</b>
                        &emsp;Suggesion are welcomed..
                    </p>
                    <form name="form1" ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="email" placeholder="Email" name="user_email" />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank You..."}
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Contact
