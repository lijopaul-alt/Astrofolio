import { lazy, Suspense, useEffect, useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import DarkModeToggle from "react-dark-mode-toggle";

const Hero = lazy(() => import("./components/Hero"));
const Project = lazy(() => import("./components/Project"));
const Skill = lazy(() => import("./components/Skill"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("body");
      document.body.classList.remove("bodyDark");
    }
    if (!isDarkMode) {
      document.body.classList.remove("body");
      document.body.classList.add("bodyDark");
    }
  }, [isDarkMode]);

  return (
    <Suspense
      fallback={
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
      }
    >
      <div
        className={
          isDarkMode
            ? "App  container my-10 mx-auto max-w-screen-lg bg-black"
            : "App  container my-10 mx-auto max-w-screen-lg light"
        }
      >
        <NavBar isDarkMode={isDarkMode} />

        <main>
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={40}
            className="toggle"
            speed={1}
          />
          <Hero isDarkMode={isDarkMode} />
          <Project isDarkMode={isDarkMode} />
          <Skill isDarkMode={isDarkMode} />
          <Contact isDarkMode={isDarkMode} />
        </main>
      </div>
    </Suspense>
  );
}

export default App;
