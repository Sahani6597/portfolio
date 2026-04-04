import React from "react";
import Navbar from "./component/Navbar";
import Bio from "./component/bio";
import Tech from "./component/tech";
import Project from "./component/Projects";
import Experience from "./component/Experience";
import Education from "./component/Education";
import Certifications from "./component/Certifications";
import Contact from "./component/contact";

const App = () => {
  return (
    <div className="relative font-sans min-h-screen">
      {/* Black and white background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      
      {/* Geometric floating elements in B&W */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-300/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      {/* Geometric shapes in B&W */}
      <div className="fixed top-32 right-32 w-16 h-16 bg-white/10 rotate-45 animate-bounce" style={{animationDelay: '0s'}}></div>
      <div className="fixed bottom-40 left-20 w-12 h-12 bg-gray-400/10 clip-triangle animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="fixed top-3/4 right-1/4 w-20 h-20 bg-white/5 clip-hexagon animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="fixed top-1/4 left-1/4 w-8 h-8 bg-gray-300/10 rotate-12 animate-ping" style={{animationDelay: '2s'}}></div>
      <div className="fixed bottom-1/4 right-3/4 w-14 h-14 bg-white/8 clip-pentagon animate-pulse" style={{animationDelay: '0.5s'}}></div>
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        
        <main className="py-4">
          <section className="mb-20 animate-fadeInUp" style={{'--delay': '0.2s'}}>
            <Bio />
          </section>
          
          <section className="mb-20 animate-fadeInUp" style={{'--delay': '0.4s'}}>
            <Tech />
          </section>
          
          <section className="mb-20 animate-fadeInUp" style={{'--delay': '0.6s'}}>
            <Experience />
          </section>
          
          <section className="mb-20 animate-fadeInUp" style={{'--delay': '0.8s'}}>
            <Project />
          </section>
          
          <section className="mb-20 animate-fadeInUp" style={{'--delay': '1s'}}>
            <Education />
          </section>
          
          <section className="mb-20 animate-fadeInUp" style={{'--delay': '1.2s'}}>
            <Certifications />
          </section>
          
          <section className="mb-20 animate-fadeInUp" style={{'--delay': '1.4s'}}>
            <Contact />
          </section>
        </main>
        
        <footer className="py-8 text-center text-sm text-gray-400 animate-fadeIn" style={{'--delay': '1.6s'}}>
          <p>© {new Date().getFullYear()} Sankalp Sahani. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;