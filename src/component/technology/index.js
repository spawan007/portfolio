import React from "react";
import Image from "next/image";

export default function Technology() {
    return (
        <div className="brands-section">
            <h2 className="brand-heading">
                Company I Worked With
            </h2>
            <div className="brand-slider">
                <div className="slider-track">
                    {[...Array(2)].map((_, i) => (
                        <>
                            <Image key={i + "1"} src={'/techstack/aws.png'} width={100} height={60} alt="aws_image" />
                            <Image key={i + "2"} src={'/techstack/aws.png'} width={100} height={60} alt="aws_image" />
                            <Image key={i + "3"} src={'/techstack/aws.png'} width={100} height={60} alt="aws_image" />
                            <Image key={i + "4"} src={'/techstack/aws.png'} width={100} height={60} alt="aws_image" />
                            <Image key={i + "5"} src={'/techstack/aws.png'} width={100} height={60} alt="aws_image" />
                            <Image key={i + "6"} src={'/techstack/aws.png'} width={100} height={60} alt="aws_image" />
                            <Image key={i + "7"} src={'/techstack/aws.png'} width={100} height={60} alt="aws_image" />
                            <Image key={i + "8"} src={'/techstack/aws.png'} width={100} height={60} alt="aws_image" />
                            <Image key={i + "9"} src={'/techstack/aws.png'} width={100} height={60} alt="aws_image" />
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}