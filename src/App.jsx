import "./App.css";

import { Navbar } from "./components/layout/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { ProjectSection } from "./sections/ProjectSection";

function App() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <ProjectSection />
        </>
    );
}

export default App