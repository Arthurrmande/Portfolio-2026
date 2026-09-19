import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Domains from "./components/Domains";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
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

export default App;