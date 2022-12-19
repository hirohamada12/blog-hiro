import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
    name: "Hiro Phan",
    avatarImage: "/images/avatar_hiro.JPG",
    content:
        "I am Hiro Phan, fullstack developer from Ha Noi, Viet Nam. I have rich experience in web site and mobile app development and building and customization, also I am good at React, Java.",
};

const progressData = [
    {
        id: 1,
        title: "BackEnd Development",
        percantage: 85,
        progressColor: "#FFD15C",
    },
    {
        id: 2,
        title: "Font-End Development",
        percantage: 95,
        progressColor: "#FF4C60",
    },
    {
        id: 3,
        title: "DevOps",
        percantage: 70,
        progressColor: "#6C6CE5",
    },
];

const counterData = [
    {
        id: 1,
        title: "Projects completed",
        count: 10,
        icon: "icon-fire",
    },
    {
        id: 2,
        title: "Cup of coffee",
        count: 5670,
        icon: "icon-cup",
    },
    {
        id: 4,
        title: "Nominees winner",
        count: 6,
        icon: "icon-badge",
    },
];

function About() {
    return (
        <section id="about">
            <div className="container">
                <Pagetitle title="About Me"/>
                <div className="row">
                    <div className="col-md-3">
                        <div className="text-center text-md-left">
                            <img style={{borderRadius: "50%", width: "200px", height: "200px",objectFit:"cover"}}
                                 src={aboutContent.avatarImage} alt={aboutContent.name}/>
                        </div>
                        <div className="spacer d-md-none d-lg-none" data-height="30"></div>
                    </div>

                    <div className="col-md-9 triangle-left-md triangle-top-sm">
                        <div className="rounded bg-white shadow-dark padding-30">
                            <div className="row">
                                <div className="col-md-6">
                                    <p>{aboutContent.content}</p>
                                    <div className="mt-3">
                                        <a href="!#" className="btn btn-default">
                                            Download CV
                                        </a>
                                    </div>
                                    <div
                                        className="spacer d-md-none d-lg-none"
                                        data-height="30"
                                    ></div>
                                </div>
                                <div className="col-md-6">
                                    {progressData.map((progress) => (
                                        <TrackVisibility
                                            once
                                            key={progress.id}
                                            className="progress-wrapper"
                                        >
                                            <Skill progress={progress}/>
                                        </TrackVisibility>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer" data-height="70"></div>
                <div className="row fix-spacing">
                    {counterData.map((counter) => (
                        <div key={counter.id} className="col-md-3 col-sm-6">
                            <TrackVisibility once>
                                <Counter counterItem={counter}/>
                            </TrackVisibility>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
