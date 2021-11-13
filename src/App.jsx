import About from "./components/about/About";
import Intro from "./components/intro/Intro";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./components/contact/Contact";
import  {Toggle} from "../src/components/toggle/Toggle";
import Resume from "./components/resume/Resume"
import Footer from "../src/components/footer/Footer"
import { ThemeContext} from "../src/context"
import { useContext } from "react"
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor:darkMode ? "#222": "white",color:darkMode && "white"}}>
      <Toggle/>
      <Intro/>
      <About/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  )
};

export default App;