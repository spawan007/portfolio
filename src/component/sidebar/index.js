import React from "react";
import Image from "next/image";

export default function Sidebar() {
    return (
        <div className="sidebar-section">
            <div className="sidebar-content">
                <Image src={"/profile.jpeg"} width={400} height={400} alt="profile_image" />
                <h2>Pawan Kumar</h2>
                <p>I am a FullStack Developer based in Chandigarh(Mohali)</p>
            </div>
        </div>
    )
}