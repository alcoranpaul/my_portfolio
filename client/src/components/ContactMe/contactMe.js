import React, { useState, useEffect } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import Footer from "../../components/Footer/footer"
import imgBack from "../../assets/contact/mailz.jpeg";
import load1 from "../../assets/contact/load2.gif";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/animations";
import "./contactMe.css";

const ContactMe = (props) => {
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
                            steps={["Get in touch 🤝", 2000]}
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
                        <h3>Send your inquires to my inbox using the following details!</h3>
                        <div className="details-container">
                            <ul>
                                <li>Email:
                                    <span className="data">poulreyes74@yahoo.com</span>
                                </li>
                                <li>Mobile:
                                    <span className="data">(431) 337-7373</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactMe;
