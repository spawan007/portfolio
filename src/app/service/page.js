"use client";
import React, { useEffect, useState } from "react";
import Header from "@/component/header";
import { useRouter } from "next/navigation";
import Aos from "aos";

export default function Service() {
    const router = useRouter();

    useEffect(() => {
        Aos.init();;
    }, []);

    return (
        <div className="container">
            <div className="service-section">
                <Header />
                <div className="service-content">
                    <div className="service_container">
                        <h3> Service</h3>
                        <h1> Quality Services</h1>
                        <div className="service-inner-content">
                            <div className="service-block" data-aos="fade-up" data-aos-duration="500">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="remixicon "><path d="M6.93912 14.0328C6.7072 14.6563 6.51032 15.2331 6.33421 15.8155C7.29345 15.1189 8.43544 14.6767 9.75193 14.5121C12.2652 14.198 14.4976 12.5385 15.6279 10.4537L14.1721 8.99888L15.5848 7.58417C15.9185 7.25004 16.2521 6.91614 16.5858 6.58248C17.0151 6.15312 17.5 5.35849 18.0129 4.2149C12.4197 5.08182 8.99484 8.50647 6.93912 14.0328ZM17 8.99739L18 9.99669C17 12.9967 14 15.9967 10 16.4967C7.33146 16.8303 5.66421 18.6636 4.99824 21.9967H3C4 15.9967 6 1.99669 21 1.99669C20.0009 4.99402 19.0018 6.99313 18.0027 7.99402C17.6662 8.33049 17.3331 8.66382 17 8.99739Z"></path>
                                </svg>
                                <h2>Shopify Theme</h2>
                                <p>Fast, responsive, and easy to customize. This Shopify theme delivers a clean design, smooth navigation, and high performance—perfect for any brand seeking a modern, conversion-focused storefront.</p>
                            </div>
                            <div className="service-block" data-aos="fade-up" data-aos-duration="500">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="remixicon "><path d="M4.00021 18.9223L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L4.00021 12.3671V18.9223ZM8.85987 21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V13.9221L8.85987 21ZM6.02202 5.96771L15.2939 2.22164C15.8059 2.01475 16.3888 2.26215 16.5956 2.77422L22.2147 16.682C22.4216 17.194 22.1742 17.7769 21.6622 17.9838L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1773L5.46944 7.2695C5.26255 6.75743 5.50995 6.1746 6.02202 5.96771ZM9.00021 9.00004C9.55249 9.00004 10.0002 8.55233 10.0002 8.00004C10.0002 7.44776 9.55249 7.00004 9.00021 7.00004C8.44792 7.00004 8.00021 7.44776 8.00021 8.00004C8.00021 8.55233 8.44792 9.00004 9.00021 9.00004Z"></path>
                                </svg>
                                <h2>Shopify Apps</h2>
                                <p>Lightweight, powerful Shopify apps built to enhance store functionality. From custom features to automation, each app is tailored for seamless integration, boosting efficiency and improving the customer experience.</p>
                            </div>
                            <div className="service-block" data-aos="fade-up" data-aos-duration="500">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="remixicon "><path d="M2.04932 12.9999H7.52725C7.70624 16.2688 8.7574 19.3053 10.452 21.8809C5.98761 21.1871 2.5001 17.5402 2.04932 12.9999ZM2.04932 10.9999C2.5001 6.45968 5.98761 2.81276 10.452 2.11902C8.7574 4.69456 7.70624 7.73111 7.52725 10.9999H2.04932ZM21.9506 10.9999H16.4726C16.2936 7.73111 15.2425 4.69456 13.5479 2.11902C18.0123 2.81276 21.4998 6.45968 21.9506 10.9999ZM21.9506 12.9999C21.4998 17.5402 18.0123 21.1871 13.5479 21.8809C15.2425 19.3053 16.2936 16.2688 16.4726 12.9999H21.9506ZM9.53068 12.9999H14.4692C14.2976 15.7828 13.4146 18.3732 11.9999 20.5915C10.5852 18.3732 9.70229 15.7828 9.53068 12.9999ZM9.53068 10.9999C9.70229 8.21709 10.5852 5.62672 11.9999 3.40841C13.4146 5.62672 14.2976 8.21709 14.4692 10.9999H9.53068Z"></path>
                                </svg>
                                <h2>Website Design</h2>
                                <p>Modern, responsive websites crafted for performance and usability. From concept to code, each design is tailored to your brand—delivering clean visuals, intuitive navigation, and a seamless user experience across all devices.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pricing-content">
                    <div className="price_row">
                        <div className="pricing-heading">
                            <p>Pricing</p>
                            <h2>Flexible Pricing Plan</h2>
                        </div>
                        <div className="pricing-amount-block">
                            <div className="pricing-block" data-aos="fade-up" data-aos-duration="500">
                                <div className="pricing-inner-block">
                                    <h2>Basic</h2>
                                    <p className="line-clamp-2">
                                        Perfect if you have a design ready. I’ll build it with clean, responsive development.
                                    </p>
                                    <span>$15</span><h1 className="per_hour">/h</h1>
                                </div>
                                <div className="pricing-desc_row">
                                    <div className="price_desc_content">
                                        <div className="pricing-desc">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                            </svg>
                                            Build based on your provided wireframe
                                        </div>
                                        <div className="pricing-desc">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                            </svg>
                                            Design with Figma or Framer files
                                        </div>
                                        <div className="pricing-desc">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                            </svg>
                                            Product design integration
                                        </div>
                                        <div className="pricing-desc">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                            </svg>
                                            Digital marketing setup
                                        </div>
                                        <div className="pricing-desc">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                            </svg>
                                            Custom support as needed
                                        </div>
                                    </div>
                                    <div className="pricing-order-button" onClick={() => router.push('/contact')}>
                                        Select
                                    </div>
                                </div>
                            </div>
                            <div className="pricing-block" data-aos="fade-up" data-aos-duration="500">
                                <div className="pricing-inner-block">
                                    <h2>Standard</h2>
                                    <p className="line-clamp-2">
                                        No design needed. I’ll create, design, and develop your website or app from scratch.
                                    </p>
                                    <span>$20</span><h1 className="per_hour">/h</h1>
                                </div>
                                <div className="pricing-desc_row">
                                    <div className="price_desc_content">
                                        <div className="pricing-desc">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                            </svg>
                                            Full website design
                                        </div>
                                        <div className="pricing-desc">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                            </svg>
                                            Mobile app design (if needed)
                                        </div>
                                        <div className="pricing-desc">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                            </svg>
                                            Product design
                                        </div>
                                        <div className="pricing-desc">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                            </svg>
                                            Digital marketing setup
                                        </div>
                                        <div className="pricing-desc">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                            </svg>
                                            Custom support and revisions
                                        </div>
                                    </div>
                                    <div className="pricing-order-button" onClick={() => router.push('/contact')}>
                                        Select
                                    </div>
                                </div>
                            </div>
                            <div className="pricing-block" data-aos="fade-up" data-aos-duration="500">
                                <div className="pricing-inner-block">
                                    <h2>Elite</h2>
                                    <p className="line-clamp-2">
                                        Premium build for top performance, refinement, and full support—perfect if you already have a design.
                                    </p>
                                    <span>$30</span><h1 className="per_hour">/h</h1>
                                </div>

                                <div className="pricing-desc_row">
                                    <div className="price_desc_content">
                                        <div className="pricing-desc">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                            </svg>
                                            Website design
                                        </div>
                                        <div className="pricing-desc">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                            </svg>
                                            Mobile apps design
                                        </div>
                                        <div className="pricing-desc">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                            </svg>
                                            Product Design
                                        </div>
                                        <div className="pricing-desc">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                            </svg>
                                            Advanced digital marketing setup
                                        </div>
                                        <div className="pricing-desc">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                            </svg>
                                            Priority custom support and updates
                                        </div>
                                    </div>
                                    <div className="pricing-order-button" onClick={() => router.push('/contact')}>
                                        Select
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}