import React from "react";
import Navbar from "./component/Navbar";
import Bio from "./component/bio";
import Tech from "./component/tech";
import Project from "./component/Projects";
import Contact from "./component/contact";

const App = () => {
  return (
    <div className="relative font-sans">
      {/* Background gradient */}
      <div className="fixed top-0 left-0 min-h-screen w-full bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 -z-10 animate-gradientShift" />
      
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        
        <main className="py-6">
          <section className="mb-16 animate-fadeInUp" style={{'--delay': '0.2s'}}>
            <Bio />
          </section>
          
          <section className="mb-16 animate-fadeInUp" style={{'--delay': '0.4s'}}>
            <Tech />
          </section>
          
          <section className="mb-16 animate-fadeInUp" style={{'--delay': '0.6s'}}>
            <Project />
          </section>
          
          <section className="mb-16 animate-fadeInUp" style={{'--delay': '0.8s'}}>
            <Contact />
          </section>
        </main>
        
        <footer className="py-6 text-center text-sm text-indigo-700 animate-fadeIn" style={{'--delay': '1s'}}>
          <p>© {new Date().getFullYear()} Sankalp Sahani. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;