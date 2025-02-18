import Header from "@/component/header";
import Sidebar from "@/component/sidebar";
import Description from "@/component/description";
import Technology from "@/component/technology";
import Projects from "@/component/projects";

export default function Home() {
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
      </div>
    </div>
  );
}
