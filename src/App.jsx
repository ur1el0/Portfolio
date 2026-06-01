import "./App.css";

import { Navbar } from "./components/layout/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { ProjectSection } from "./sections/ProjectSection";
import { AboutSection } from "./sections/AboutSection";
import { ParticipationSection } from "./sections/ParticipationSection";

function App() {
    return (
        <div className="pt-14">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ParticipationSection />
        </div>
    );
}

export default App