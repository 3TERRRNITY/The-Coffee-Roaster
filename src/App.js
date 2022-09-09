import "./dist/index.css";
import Navbar from "./components/Navbar";

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
    </>
  );
}

export default App;
