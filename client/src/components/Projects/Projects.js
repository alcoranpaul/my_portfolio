import React, { useEffect, useState } from 'react'
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/animations";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import PickAndDrop from "../../assets/projects/PickAndDrop.jpg"
import FPGA from "../../assets/projects/FPGA.jpg"
import TodoList from "../../assets/projects/TodoList.png"
import Footer from '../Home/Footer/Footer';
import HeaderProject from './HeaderProject/HeaderProject';
import "./Projects.css"


function Projects(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return; //If not in view dont show
        Animations.animations.fadeInScreen(props.id); //Else show data
    };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(
            fadeInScreenHandler
        );

    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);

    const projectItems = [
        {
            title: "Electronic Lock",
            subtitle: ["FPGA DE-10 Board", "Verilog"],
            description: "Electronic lock prototype for my Digital Logic Systems course project",
            imgSrc: FPGA

        },
        {
            title: "Pick & Drop Mechanism",
            subtitle: ["Arduino board", "C++"],
            description: "A pick and drop mechanism that sorts colored objects that was made from recycled materials for my Design in Engineering course project",
            imgSrc: PickAndDrop
        },
        {
            title: "Todo List App",
            subtitle: ["Python", "PyQt5", "SQLite"],
            description: "My first executable todo list app",
            imgSrc: TodoList
        },

    ]
    const projectSubtitle = (items) => {
        return items.map((value, i) => (
            <li className='project-subtitle' key={i}>
                {value}
            </li>
        ))

    }
    const projectShow = () => {
        return projectItems.map((value, i) => (
            <div key={i}>
                <Col className='project-item'>
                    <Card className="project-card">
                        <Image src={value.imgSrc} className="card-img-top" fluid />
                        <Card.Body className='project-body'>
                            <Card.Title className='project-title'>{value.title}</Card.Title>
                            <Card.Subtitle>
                                <ul>
                                    {projectSubtitle(value.subtitle)}
                                </ul>
                            </Card.Subtitle>
                            <Card.Text className='project-description'>
                                {value.description}
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        ))
    }


    return (

        <div className="projects-container screen-container fade-in"
            id={props.id || ""}>
            <HeaderProject />
            <div className="projects-parent">
                <ScreenHeading
                    title={"Projects"}
                    subHeading={"My Projects"}
                />
                <Container>
                    <Row className="project-item-indiv">
                        {projectShow()}
                    </Row>
                </Container>
            </div>
            <Footer />
        </div >
    )
}

export default Projects