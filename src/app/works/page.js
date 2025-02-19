"use client";
import React, { useEffect, useState } from "react";
import Projects from "@/component/projects";
import Header from "@/component/header";
import Footer from "@/component/footer";

export default function Works() {

    return (
        <div className="work-section">
            <Header />
            <Projects />
            <Footer />
        </div>
    )
}