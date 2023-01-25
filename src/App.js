import { useEffect, useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import styles from "./style";

function App() {
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    const changeHeader = () => {
      let y = window.scrollY;
      if (y > 100) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    };

    window.addEventListener("scroll", changeHeader);

    return () => window.removeEventListener("scroll", changeHeader);
  }, []);
  
  return (
    <div className="w-full oveflow-hidden">
      <div
        className={`${styles.paddingX} ${styles.flexCenter} ${
          transparent ? "bg-transparent" : "bg-secondary"
        } fixed w-full transition ease-in-out duration-400 z-[1000]`}
      >
        <div className={`xl:max-w-[90%] w-full`}>
          <Header />
        </div>
      </div>
      <div className={`${styles.flexCenter} w-[100%] h-[100%]`}>
        <Home />
      </div>
      <div
        className={`${styles.flexCenter} bg-primary ${styles.paddingXSection}  relative`}
      >
        <Skills />
      </div>
      <div
        className={`${styles.flexCenter} bg-primary ${styles.paddingXSection} `}
      >
        <Projects />
      </div>
      <div
        className={`${styles.flexCenter} pink-gradient ${styles.paddingXSection} `}
      >
        <Contact />
      </div>
      <div
        className={`${styles.flexCenter} bg-primary ${styles.paddingXSection} `}
      >
        <Footer />
      </div>
    </div>
  );
}

export default App;
