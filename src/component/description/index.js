import React from "react";

export default function Description() {

    return (
        <div className="desc-section" data-aos="fade-up" data-aos-duration="500">
            <p>Hi</p>
            <h1>I’m Pawan Kumar <br /><span className="sub-detail">A full-stack developer specializing in building React and Shopify applications.</span></h1>
            <div className="desc-freelancing">
                <p>Open to opportunities and new collaborations</p>
            </div>
            <a href="/cv/cv.pdf" download className="download-btn">
                Download CV
                <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="remixicon"
                >
                    <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z" />
                </svg>
            </a>
        </div>
    )
}