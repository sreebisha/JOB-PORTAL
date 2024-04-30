import "./App.css";
import Footer from "./pages/Footer";
import NavBar from "./pages/sections/NavBar";
import Section1 from "./pages/sections/Section1";
import Section2 from "./pages/sections/Section2";
import Section3 from "./pages/sections/Section3";
import Section4 from "./pages/sections/Section4";
import Section5 from "./pages/sections/Section5";

function App() {
    return (
        <>
            <NavBar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
        </>
    );
}

export default App;
