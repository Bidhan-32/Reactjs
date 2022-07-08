import Navbar from "./Navbar/Navbar";
import "./App.css";
import Intro from "./Intro/Intro";
import Intro1 from "./Intro1/Intro1";
import Timeline from "./Timeline/Timeline";
import Services from "./Services/Services";
import Recent from "./Recent/Recent";
import Customer from "./Customer/Customer";
import Testimonial from "./Testimonial/Testimonial";
import Client from "./Client/Client";
import Card1 from "./Card1/Card1";
import Feature from "./Feature/Feature";
import Company from "./Company/Company";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Intro1/>
    <Timeline/>
    <Services/>
    <Recent/>
    <Card1/>
    <Customer/>
    <Testimonial/>
    <Client/>
    <Feature/>
    <Company/>
    </div>
  );
}

export default App;
