import "./dist/index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  const navbarLinks = [
    { url: "#", title: "HOME" },
    { url: "#", title: "WHY US" },
    { url: "#", title: "MENU" },
    { url: "#", title: "LOCATIONS" },
    { url: "#", title: "NEWSLETTERS" },
  ];
  return (
    <>
      <Navbar navbarLinks={navbarLinks} />
      <Hero />
    </>
  );
}

export default App;
