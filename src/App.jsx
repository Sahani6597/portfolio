import React from "react";
import Navbar from "./component/Navbar";
import Bio from "./component/bio";
import Tech from "./component/tech";
import Project from "./component/Projects";
import Contact from "./component/contact";
const App = () => {
  return (
   <>
   <div className='fixed top-0 min-h-[100vh] w-[100%] bg-gradient-to-b from-slate-300 to-slate-500 -z-10'/>
   <Navbar/>
   <Bio/>
   <Tech/>
   <Project/>
   <Contact/>
   </>
  );
};

export default App;
