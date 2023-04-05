
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Dashboard from './component/Dashboard';
import Footer from './component/Footer';
import Hero from './component/Hero';

import Service from './component/Service';
import Team from './component/Team';
import WhyUs from './component/WhyUs';

function App() {
  return (
    <div className="App">
     <Dashboard/>
     <Hero/>
     <About/>
     <WhyUs/>
     <Service/>
     <Team/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
