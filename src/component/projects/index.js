"use client";
import React, { useEffect, useState } from "react";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const allProjects = [
            {
                title: "Bullman Equipment",
                image: "",
                desc: "Developed a full-featured e-commerce website for Bullman Equipment using Node.js, Next.js, and Odoo. The platform integrates Odoo APIs with custom Node.js APIs to fetch product, inventory, and order data in real-time. Also implemented a flexible custom shipping solution, offering options based on weight, fixed rates, and specific customer cases. \n\nFor payment processing, integrated multiple secure gateways, including Stripe, Apple Pay, Bank Transfer, Alma, and Klarna. The website was built to be fully responsive and optimized across devices, ensuring a seamless user experience. By leveraging Odoo for backend management and modern technologies like Next.js and Node.js, this project streamlined the e-commerce process, providing users with a smooth and secure shopping experience."
            },
            {
                title: "B2B Custom Shipping",
                image: "",
                desc: "Developed custom shipping rates for a Marine Energy Store, supporting both B2B and B2C customers. The solution includes free shipping and pickup options for Australian customers, and calculated shipping for New Zealand. Custom attributes were created to store the specific shipping method used for each order. \n\nAdditionally, region-based shipping rates were implemented for Australian customers, providing a tailored delivery experience based on their location, ensuring cost-effective and personalized shipping options."
            },
            {
                title: "Rebato",
                image: "",
                desc: "Created a Shopify public app enabling merchants to manage offers and discounts through the Shopify admin panel. Offers are displayed on the product and checkout pages via theme app and checkout UI extensions. Merchants can design custom offer popups, and the app syncs offers automatically via cron for real-time updates. \n\nA comprehensive dashboard allows merchants to track used, active, and invalid coupons, providing effective control over discount management and maximizing store sales."
            },
            {
                title: "Rebato",
                image: "",
                desc: "Created a Shopify public app enabling merchants to manage offers and discounts through the Shopify admin panel. Offers are displayed on the product and checkout pages via theme app and checkout UI extensions. Merchants can design custom offer popups, and the app syncs offers automatically via cron for real-time updates. \n\nA comprehensive dashboard allows merchants to track used, active, and invalid coupons, providing effective control over discount management and maximizing store sales."
            },
            {
                title: "Rebato",
                image: "",
                desc: "Created a Shopify public app enabling merchants to manage offers and discounts through the Shopify admin panel. Offers are displayed on the product and checkout pages via theme app and checkout UI extensions. Merchants can design custom offer popups, and the app syncs offers automatically via cron for real-time updates. \n\nA comprehensive dashboard allows merchants to track used, active, and invalid coupons, providing effective control over discount management and maximizing store sales."
            },
            {
                title: "Rebato",
                image: "",
                desc: "Created a Shopify public app enabling merchants to manage offers and discounts through the Shopify admin panel. Offers are displayed on the product and checkout pages via theme app and checkout UI extensions. Merchants can design custom offer popups, and the app syncs offers automatically via cron for real-time updates. \n\nA comprehensive dashboard allows merchants to track used, active, and invalid coupons, providing effective control over discount management and maximizing store sales."
            },
            {
                title: "Rebato",
                image: "",
                desc: "Created a Shopify public app enabling merchants to manage offers and discounts through the Shopify admin panel. Offers are displayed on the product and checkout pages via theme app and checkout UI extensions. Merchants can design custom offer popups, and the app syncs offers automatically via cron for real-time updates. \n\nA comprehensive dashboard allows merchants to track used, active, and invalid coupons, providing effective control over discount management and maximizing store sales."
            },
            {
                title: "Rebato",
                image: "",
                desc: "Created a Shopify public app enabling merchants to manage offers and discounts through the Shopify admin panel. Offers are displayed on the product and checkout pages via theme app and checkout UI extensions. Merchants can design custom offer popups, and the app syncs offers automatically via cron for real-time updates. \n\nA comprehensive dashboard allows merchants to track used, active, and invalid coupons, providing effective control over discount management and maximizing store sales."
            }
        ];
        setProjects(allProjects);
    }, []);

    return (
        <div className="project-section">
            <div className="project-header">
                <h1>
                    Works & Projects
                </h1>
                <p>
                    Check out some of my design projects, meticulously crafted with love and dedication, each one reflecting the passion and soul I poured into every detail.
                </p>
            </div>
            <div className="projects-content">
                {projects.map((project, ind) => (
                    <div className="project-block" key={ind + 1}>
                        <div className="project-image">
                            {project.image}
                        </div>
                        <h2>
                            {project.title}
                        </h2>
                        <p>{project.desc}</p>
                    </div>
                )
                )}
            </div>
        </div>
    )
}