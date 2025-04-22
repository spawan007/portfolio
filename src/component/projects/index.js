"use client";
import React, { useEffect, useState } from "react";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const allProjects = [
            {
                title: "Bullman Equipment",
                image: "/projects/bullman.jpeg",
                desc: "We specialize in providing high-quality construction, industrial, and agricultural machinery to help you get the job done efficiently and effectively. Whether you're working on a large construction project, farming, or tackling any heavy-duty task, our extensive range of equipment is designed to meet your needs."
            },
            {
                title: "GarbhMitra",
                image: "/projects/garbhmitra.png",
                desc: "We believe that pregnancy is a sacred journey—a time to honor your body, mind, and the life growing within you. Our mission is to support expectant mothers through every stage of pregnancy with holistic wellness practices, expert guidance, and a nurturing community."
            },
            {
                title: "Rebato",
                image: "/projects/rebato.svg",
                desc: "​The Rebato app for Shopify is designed to enhance your store's checkout experience by seamlessly displaying available offers and discounts directly on product pages and at checkout. This feature aims to reduce cart abandonment and increase conversions by making it easier for customers to apply discounts."
            },
            {
                title: "Elegant Eternity",
                image: "/projects/elegant-eternity.webp",
                desc: "Elegant Eternity is an online jewelry retailer specializing in personalized photo projection jewelry. Their offerings include bracelets, necklaces, rings, keychains, and ornaments that feature microphotograph technology, allowing cherished memories to be encapsulated within the jewelry pieces."
            },
            {
                title: "Custom PC Builder",
                image: "/projects/custom-pc.jpg",
                desc: "Lahlou Industrie is an Algerian company specializing in the sale, distribution, and maintenance of computer hardware and peripherals. They offer a wide range of products, including custom PC components, gaming peripherals, and pre-built PC stations"
            },
            {
                title: "iShips",
                image: "/projects/iship.png",
                desc: "The I-ShipS website, accessible at iships.ca, is a Canadian-based last-mile delivery service provider specializing in the Greater Toronto Area (GTA). Founded in January 2023, I-ShipS offers tailored shipping solutions that integrate seamlessly into business operations, providing a user-friendly dashboard for order management and live tracking capabilities."
            },
            {
                title: "ShopSimilar",
                image: "/projects/shopsimilar.webp",
                desc: "An AI-powered app that adds a 'Search Similar' button, directing customers to a page with similar items. Ideal for enhancing product discovery and cross-selling. These apps can help enhance your store's product discovery features, leading to improved customer engagement and potentially higher sales"
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
                Explore some of my full-stack development projects, thoughtfully built with precision and care. Each project showcases my commitment to delivering high-quality, functional, and seamless experiences across both front-end and back-end technologies.
                </p>
            </div>
            <div className="row project-masonry-active overflow-hidden projects-content">
                {projects.map((project, ind) => (
                    <div className="col-lg-4 col-md-6 item branding game scaleUp" key={ind + 1}>

                        <div className="project-block">
                            <div className="project-image">
                                <img src={project.image} className="project-image-content" alt="project-image" />
                                <a className="details-btn" href="/single-project">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon">
                                        <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="inner_block_content">
                                <h2>{project.title}</h2>
                                <p>{project.desc}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}