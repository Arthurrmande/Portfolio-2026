import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Domains from "./components/Domains";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import ProjectPage from "./pages/ProjectPage";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Profile />
        <Domains />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projet/:id" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;