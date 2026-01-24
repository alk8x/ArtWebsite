import { HashRouter as Router } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import '@openfonts/amatic-sc_all';
import '@fontsource/oswald';
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;