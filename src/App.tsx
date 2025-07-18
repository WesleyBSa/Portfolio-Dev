import React, { useState, useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import FloatingShapes from './components/FloatingShapes';
import Navbar from './components/Navbar';
import TechnologyIcons from './components/TechnologyIcons';
import CallToAction from './components/CallToAction';
import SocialLinks from './components/SocialLinks';
import ScrollIndicator from './components/ScrolIndicator';
import { SiReact, SiNextdotjs, SiNodedotjs, SiGo, SiPostgresql, SiDocker, SiGit } from 'react-icons/si';


const App = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

const technologies = [
  { name: 'React', icon: <SiReact />, color: 'text-orange-400' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-gray-300' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-amber-400' },
  { name: 'Golang', icon: <SiGo />, color: 'text-orange-300' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-yellow-400' },
  { name: 'Docker', icon: <SiDocker />, color: 'text-amber-300' },
  { name: 'Git', icon: <SiGit />, color: 'text-orange-500' }
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-zinc-950 relative overflow-hidden">
      <AnimatedBackground />
      <FloatingShapes />
      <Navbar />

      <main className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6 py-20 md:py-0">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-base md:text-lg lg:text-xl text-orange-400 mb-3 md:mb-4 font-medium">
              Olá, eu sou
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-100 mb-4 md:mb-6 leading-tight">
              Wesley
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
                Desenvolvedor Full Stack
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Especializado em criar experiências digitais 
              <span className="text-orange-400 font-semibold"> modernas e performáticas</span>
            </p>

            <TechnologyIcons mounted={mounted} technologies={technologies} />
            <CallToAction mounted={mounted} />
            <SocialLinks mounted={mounted} />
          </div>
        </div>
      </main>

      <ScrollIndicator />
    </div>
  );
};

export default App;