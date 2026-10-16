import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Domains from "./components/Domains";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet/:id" element={<ProjectPage />} />
      </Routes>

      <AnimatePresence>
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>
    </>
  );
}

export default App;
