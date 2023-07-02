
import './App.css';
import About from './component/About';
import AddMember from './component/AddMember';
import Contact from './component/Contact';
import Dashboard from './component/Dashboard';

import Hero from './component/Hero';

import Service from './component/Service';
import Team from './component/Team';
import ViewMember from './component/ViewMember';

// import OrganizationalChart from './component/orgChart';
// import employees from "./data";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Dashboard/>

     <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/add" element={<AddMember/>} />
        <Route exact path="/view" element={<ViewMember/>} />
        <Route exact path="/about" element={<About/>} />
       
        <Route exact path="/service" element={<Service/>} />
        <Route exact path="/team" element={<Team/>} />
        <Route exact path="/contact" element={<Contact/>} />
        
      </Routes>
    </BrowserRouter>
     
    
    

    </div>
  );
}

export default App;
