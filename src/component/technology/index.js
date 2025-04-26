import React from "react";
import Image from "next/image";

export default function Technology() {
    return (
        <div className="brands-section" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="brand-heading">
                Stacks
            </h2>
            <div className="brand-slider">
                <div className="slider-track">
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i + 1}>
                            <Image key={i + "1"} src={'/techstack/shopify.png'} width={160} height={60} alt="aws_image" />
                            <Image key={i + "2"} src={'/techstack/angular.png'} width={70} height={60} alt="aws_image" />
                            <Image key={i + "3"} src={'/techstack/github.png'} width={100} height={60} alt="aws_image" />
                            <Image key={i + "4"} src={'/techstack/gitlab.png'} width={60} height={60} alt="aws_image" />
                            <Image key={i + "5"} src={'/techstack/nextjs.png'} width={70} height={60} alt="aws_image" />
                            <Image key={i + "6"} src={'/techstack/react.png'} width={70} height={60} alt="aws_image" />
                            <Image key={i + "7"} src={'/techstack/nodejs.png'} width={100} height={60} alt="aws_image" />
                            <Image key={i + "8"} src={'/techstack/aws.png'} width={70} height={60} alt="aws_image" />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}