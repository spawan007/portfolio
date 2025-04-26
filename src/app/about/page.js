"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/component/header";
import Sidebar from "@/component/sidebar";
import Footer from "@/component/footer";
import Image from "next/image";
import Aos from "aos";

export default function About() {
    const router = useRouter();

    useEffect(()=>{
        Aos.init();;
    }, []);

    return (
        <div className="about-section">
            <Header />
            <div className="containor">
                <div className="main-sectionn row">
                    <div className="col-4">
                        <Sidebar page_route={"dont"} />
                    </div>
                    <div className="col-8" data-aos="fade-up" data-aos-duration="500">
                        {/* Description */}
                        <div className="self-description">
                            <h1>I’m Pawan Kumar <br /><span className="sub-detail">A Full Stack Developer</span></h1>
                            <p>
                                I'm a full stack developer with a strong focus on building modern, efficient, and scalable web and eCommerce applications. With hands-on experience in <span className="stacks_name">Shopify</span>, <span className="stacks_name">AWS</span>, <span className="stacks_name">React JS</span>, <span className="stacks_name">Node JS</span>, <span className="stacks_name">MongoDB </span> and <span className="stacks_name">Angular</span>, I bring both frontend finesse and backend strength to every project.
                            </p>
                            <p>
                                From custom Shopify integrations to dynamic web apps, I handle the entire development process crafting clean code, seamless user experiences, and backend systems that perform at scale. I’m passionate about solving real-world problems through thoughtful architecture and intuitive design.
                            </p>
                            {/* <p>
                                Every project is an opportunity to push boundaries, streamline performance, and deliver something that truly works.
                            </p> */}
                            <button onClick={() => router.push('/contact')}>
                                Get in touch
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="remixicon "><path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="experience-section">
                    <div className="exp-content" data-aos="fade-up" data-aos-duration="1500">
                        <h2> Experience</h2>
                        <div className="exp-inner-content">
                            <div className="icon">
                                <Image src={"/employee.png"} width={40} height={40} alt="experience" />
                            </div>
                            <div className="exp-main-content">
                                <h3 className="exp-year">
                                    09/2022 - Present
                                </h3>
                                <h2>Webgarh Solution Pvt. Ltd.</h2>
                                <h3>Full Stack Developer</h3>
                            </div>
                        </div>
                        <div className="exp-inner-content">
                            <div className="icon">
                                <Image src={"/employee.png"} width={40} height={40} alt="experience" />
                            </div>
                            <div className="exp-main-content">
                                <h3 className="exp-year">
                                    01/2022 - 09/2022
                                </h3>
                                <h2>Entero Healthcare Pvt. Ltd.</h2>
                                <h3>Full Stack Developer</h3>
                            </div>
                        </div>
                    </div>
                    <div className="exp-content" data-aos="fade-up" data-aos-duration="1500">
                        <h2> Education</h2>
                        <div className="exp-inner-content">
                            <div className="icon">
                                <Image src={"/employee.png"} width={40} height={40} alt="experience" />
                            </div>
                            <div className="exp-main-content">
                                <h3 className="exp-year">
                                    2018 - 2022
                                </h3>
                                <h2>Echelon Institute of Technology</h2>
                                <h3>Computer Science Engineering</h3>
                            </div>
                        </div>
                        <div className="exp-inner-content">
                            <div className="icon">
                                <Image src={"/employee.png"} width={40} height={40} alt="experience" />
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
                                <Image src={"/employee.png"} width={40} height={40} alt="experience" />
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
                {/* <Footer /> */}
            </div>
        </div>
    )
}