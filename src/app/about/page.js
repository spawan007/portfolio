"use client";
import React, { useEffect, useState } from "react";
import Header from "@/component/header";
import Sidebar from "@/component/sidebar";
import Footer from "@/component/footer";

export default function About() {

    return (
        <div className="about-section">
            <Header />
            <div className="containor">
                <div className="main-sectionn row">
                    <div className="col-4">
                        <Sidebar />
                    </div>
                    <div className="col-8">
                        {/* Description */}
                        <div className="self-description">
                            <h2>I’m Pawan Kumar, a fullstack developer.</h2>
                            <p>
                                I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.
                                <br />
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                            </p>
                            <button>Get in touch
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="remixicon "><path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="experience-section">
                    <div className="exp-content">
                        <h2> Experience</h2>
                        <div className="exp-inner-content">
                            <div className="icon">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon "><path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path>
                                </svg>
                            </div>
                            <div className="exp-main-content">
                                <h3 className="exp-year">
                                    09/2022 - Present
                                </h3>
                                <h2>FullStack Developer</h2>
                                <h3>Webgarh Solution Pvt. Ltd.</h3>
                            </div>
                        </div>
                        <div className="exp-inner-content">
                            <div className="icon">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon "><path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path>
                                </svg>
                            </div>
                            <div className="exp-main-content">
                                <h3 className="exp-year">
                                    01/2022 - 09/2022
                                </h3>
                                <h2>FullStack Developer</h2>
                                <h3>Entero Healthcare Pvt. Ltd.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="exp-content">
                        <h2> Education</h2>
                        <div className="exp-inner-content">
                            <div className="icon">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon "><path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path>
                                </svg>
                            </div>
                            <div className="exp-main-content">
                                <h3 className="exp-year">
                                    2018 - 2022
                                </h3>
                                <h2>Bachelor of Computer Science Engineering</h2>
                                <h3>Echelon Institute of Technology</h3>
                            </div>
                        </div>
                        <div className="exp-inner-content">
                            <div className="icon">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon "><path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path>
                                </svg>
                            </div>
                            <div className="exp-main-content">
                                <h3 className="exp-year">
                                    2016 -2017
                                </h3>
                                <h2>Higher Secondary Education</h2>
                                <h3>Central Board of Secondary Education </h3>
                            </div>
                        </div>
                        <div className="exp-inner-content">
                            <div className="icon">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon "><path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path>
                                </svg>
                            </div>
                            <div className="exp-main-content">
                                <h3 className="exp-year">
                                    2014 -2015
                                </h3>
                                <h2>Higher School</h2>
                                <h3>Central Board of Secondary Education </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}