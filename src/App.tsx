import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const circles = document.querySelectorAll(".circle");

    const handleMouseMove = (e: MouseEvent) => {
      // Bigger range (-150 to +150 instead of -50 to +50)
      const x = (e.clientX / window.innerWidth - 0.5) * 300;
      const y = (e.clientY / window.innerHeight - 0.5) * 300;

      circles.forEach((circle, i) => {
        // Smaller factor = more movement
        const factor = (i + 1) * 8; 
        (circle as HTMLElement).style.transform = `translate(${x / factor}px, ${y / factor}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>

      <h1>Dhivijit Koppuravuri</h1>
      <h2>Cyber Security Enthusiast</h2>
      <p>Final year student at Amrita Vishwa Vidyapeetham</p>

    </div>
  );
}

export default App;
