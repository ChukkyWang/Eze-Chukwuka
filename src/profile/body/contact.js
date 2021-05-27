import React, {useState} from 'react'
import DisplayPicture from '../../images/eze-chukwuka.jpg'
import {FiDownloadCloud, FiXCircle, FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiChevronRight} from 'react-icons/fi'
import { FaCss3, FaGit, FaGoogle, FaHtml5, FaJs, FaLaravel, FaLink, FaNodeJs, FaPython, FaReact, FaSass, FaWhatsapp } from 'react-icons/fa'
import {BsArrowRight, BsThreeDots} from 'react-icons/bs'
import JDev from '../../images/jd.png';
import TEDxApapa from '../../images/tedxapapa.png'
import Chukky from '../../images/chukky.png'

function Contact(props) {
    const devProjects = ([
        {
            //Image Properties
            devImg: JDev,
            devAlt: "JDi",

            //Project Details
            project: "JDi",
            projectDes: "JDi is an insurance fun project I built with Laravel. It comes with all functionalities: User Authentication (Create Account, Login, and Dashboard). It also comes with the added feature that calls to an API to verify the BVN presented by users.",

            //Links
            git: "",
            siteLink: "http://jd-backend.herokuapp.com/",
            stack: "Laravel",
            stackIMG: <FaLaravel/>
        },

        {
            //Image Properties
            devImg: TEDxApapa,
            devAlt: "TEDxApapa Website",

            //Project Details
            project: "TEDxApapa",
            projectDes: "TEDxApapa is an exciting project I built with React to connect with the trendy TEDx community in Apapa. This site is integrated with Firebase Firestore to collect and store data of guests and partners. It comes with full security and state management.",

            //Links
            git: "",
            siteLink: "https://tedxapapa.com",
            stack: "React",
            stackIMG: <FaReact/>
        },


        {
            //Image Properties
            devImg: Chukky,
            devAlt: "Personal Website",

            //Project Details
            project: "Eze Chukwuka",
            projectDes: "Eze Chukwuka is personal to me because it will over time tell stories about my journey as a Frontend Engineer, and the rediscovery of my passion as a Python Developer. It was built with React to present a simple overview of my work, and progress.",

            //Links
            git: "",
            siteLink: "https://chukkywang.github.io/Eze-Chukwuka/",
            stack: "React",
            stackIMG: <FaReact/>
        },

    ])
    return (
          <main className="contact closed">
                <div className="contact_body">
                    <div onClick={() => props.handleClick(false)}><FiXCircle/></div>
                    <div className="intro">
                        <img src={DisplayPicture} alt="" className="display_picture" />
                        <div className="name_title">
                            <h3>Eze Chukwuka</h3>
                            <p>Software Engineer</p>
                        </div>
                        <div className="nav">
                            <div className="onsocials">
                                <a target="_blank" href="https://drive.google.com/file/d/1rAV5UAAiM8r5lgmsYJjm2wWRH3QmWS-2/view?usp=sharing">
                                    <FiDownloadCloud/>
                                </a>
                                <a target="_blank" href="https://github.com/ChukkyWang">
                                    <FiGithub/>
                                </a>
                                <a target="_blank" href="https://twitter.com/TheChukkyEze">
                                    <FiTwitter/>
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/eze-chukwuka">
                                    <FiLinkedin/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="_contact">  
                        <div className="main_contact_body">
                            <h2 className="headings_contact">
                                My Projects
                            </h2>
                            <p>Here are some of my deeply inspiring projects.</p>
                            <div className="projects_rack">
                                {devProjects.map((devProject) => (
                                    <div key={devProject.project} className="project_item other_items">
                                        <div className="project_item_title">
                                            <h3>{devProject.project}</h3>
                                            <span className="stack-icon">
                                                {devProject.stackIMG} {devProject.stack}
                                            </span>
                                        </div>
                                        <br/>
                                        <div className="project-note">
                                            <p>{devProject.projectDes}</p>
                                        </div>
                                        <a href={devProject.siteLink} target="_blank"> Visit {devProject.project} <FiArrowRight/></a>
                                    </div>
                                ))}

                                <div className="project_item next-project">
                                    <p>Chat about your next project</p>
                                    <div>
                                        <h3>Let's</h3>
                                        <h3>Collaborate <BsArrowRight/></h3>
                                        <div className="contact-bib">
                                            <a href="mailto:ezechukwukae@gmail.com"><FaGoogle/></a>
                                            <a href="https://wa.link/7j9t00" target="_blank"><FaWhatsapp/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p style={{textAlign: 'center'}}>
                            <BsThreeDots/>
                        </p>
                        <div className="main_contact_body">
                            <h2 className="headings_contact">
                                My Stacks
                            </h2>
                            <p>Here are some of the stacks I work with more often.</p>
                            <Stacks/>
                        </div>
                    </div>
                </div>
          </main>
    )
}

export default Contact



function Stacks() {
    const myStacks = ([
        {
            key: '1',
            stack:<FaReact/> ,
            stackName: "React",
            stackStar: 'Core',
        },
        {
            key: '2',
            stack: <FaHtml5/>,
            stackName: "HTML 5",
            stackStar: 'Core',
        },
        {
            key: '3',
            stack: <FaCss3/>,
            stackName: 'CSS 3',
            stackStar: 'Core',
        },
        {
            key: '4',
            stack: <FaSass/>,
            stackName: 'Sass',
            stackStar: 'Core',
        },
        {
            key: '5',
            stack: <FaJs/>,
            stackName: 'Javascript',
            stackStar: 'Core',
        },
        {
            key: '6',
            stack: <FaLink/>,
            stackName: 'REST APIs',
            stackStar: 'Core',
        },
        {
            key: '7',
            stack: <FaGit/>,
            stackName: 'GIT',
            stackStar: 'Core',
        },
        {
            key: '8',
            stack: <FaNodeJs/>,
            stackName: 'Node',
            stackStar: 'Auxilliary',
        },

    ])
    
    return(
        <div className="stacks-cage">
        {
            myStacks.map((myStack) => (
                <div className="stack-skills">
                    <big>{myStack.stack}</big>
                    <p>{myStack.stackName}</p>
                    <small>{myStack.stackStar}</small>
                </div>
            ))
        }
        </div>
    )
}