"use client";
import React, { useEffect } from "react";
import Header from "@/component/header";
import Sidebar from "@/component/sidebar";
import Description from "@/component/description";
import Technology from "@/component/technology";
import Projects from "@/component/projects";
import Footer from "@/component/footer";
import Aos from "aos";

export default function Home() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="main-section">
      <Header />
      <div className="containor">
        <div className="main-sectionn row">
          <div className="col-4">
            <Sidebar />
          </div>
          <div className="col-8">
            <Description />
            <Technology />
          </div>
        </div>
        <div className="project-section">
          <Projects />
        </div>
        <Footer />
      </div>
    </div>
  );
}
