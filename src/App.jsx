import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/HEro";
import About from "./components/About/About";
import Experience from "./components/Exprience/Exprience";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </div>
  );
}

export default App;
