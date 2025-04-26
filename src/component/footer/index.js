"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Footer({ contact }) {
    const router = useRouter();

    return (
        <div className="footer-section" data-aos="fade-up" data-aos-duration="500">
            <div className="footer-content">
                {!contact && <h1>Ready to bring your project to life with a dash of innovation?</h1>}
                <p>
                    Let's connect and turn your vision into reality. ✨I'm also open to full-time or part-time opportunities where we can push the limits of creativity and deliver outstanding results.
                </p>
                {!contact && <button onClick={() => router.push('/contact')}>Let's Talk</button>}
            </div>
            <div className="footer-copyright">
                <p>Copyright @2025, Pawan All Rights Reserved. </p>
                <p>{""}</p>
            </div>
        </div>
    )
}