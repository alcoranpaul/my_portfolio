import React, { useState, useEffect, useRef } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import emailjs from '@emailjs/browser';
import Footer from "../../components/Footer/footer"
import imgBack from "../../assets/contact/mailz.jpeg";
// import load1 from "../../assets/contact/load2.gif";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/animations";
import HeaderContact from "./HeaderContact/HeaderContact"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./contactMe.css";

const ContactMe = (props) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // console.log("YAY")
        emailjs.sendForm('service_gr36wa5', 'template_zko604y', form.current, 'bt8wsKoy6KYlAnsCW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return; //If not in view dont show
        Animations.animations.fadeInScreen(props.id); //Else show data
    };

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(
            fadeInScreenHandler
        );
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [banner, setBanner] = useState("");
    const [bool, setBool] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            let data = {
                name,
                email,
                message,
            };
            setBool(true);
            const res = await axios.post(`/contact`, data);
            if (name.length === 0 || email.length === 0 || message.length === 0) {
                setBanner(res.data.msg);
                toast.error(res.data.msg);
                setBool(false);
            } else if (res.status === 200) {
                setBanner(res.data.msg);
                toast.success(res.data.msg);
                setBool(false);

                setName("");
                setEmail("");
                setMessage("");
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);
    return (

        <div className="main-container fade-in" id={props.id || ""}>
            <HeaderContact />
            <ScreenHeading
                subHeading={"Lets keep in touch"}
                title={"Contact Me"}
            />

            <div className="central-form">
                <div className="col">
                    <h2 className="title">
                        {" "}
                        <Typical
                            loop={Infinity}
                            steps={["Get in touch 🤝", 2000,
                                "Message me in facebook ^_^", 4000,
                                "Check out my Linkedin!! 📜", 4000,
                                "See my public GitHub projects 🧑‍💻", 5000,
                                "Add me in steam 🎮", 2000]}
                        />
                    </h2>
                    <a href="https://www.facebook.com/PaulReyes30/">
                        <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/paul-adrian-reyes-338139241/">
                        <i className="fa fa-linkedin-square"></i>
                    </a>
                    <a href="https://github.com/alcoranpaul">
                        <i className="fa fa-github-square"></i>
                    </a>
                    <a href="https://steamcommunity.com/profiles/76561198200509718/">
                        <i className="fa fa-steam-square"></i>
                    </a>
                </div>
                <div className="back-form">
                    <div className="img-back">
                        <h4>Send Your Email Here!</h4>
                        <img src={imgBack} alt="Not found" />
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Subject</label>
                        <input type="text" name="user_subject" />
                        <label>Message</label>
                        <textarea name="message" />
                        <Button className="btn-contact" type="submit" value="Send">Submit</Button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default ContactMe;
