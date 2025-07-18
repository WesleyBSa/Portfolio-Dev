import React from 'react';

type Technology = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

interface Props {
  mounted: boolean;
  technologies: Technology[];
}

const TechnologyIcons: React.FC<Props> = ({ mounted, technologies }) => (
  <div className={`mb-10 md:mb-16 transform transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <p className="text-gray-400 text-sm uppercase mb-4 tracking-wider">Tecnologias que utilizo</p>
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {technologies.map((tech, index) => (
        <div
          key={tech.name}
          className={`group flex flex-col items-center transition-all duration-300 hover:scale-110 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: `${400 + index * 100}ms` }}
        >
          <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700 group-hover:bg-orange-950/90  group-hover:border-orange-400">
            <span className="text-2xl md:text-3xl">{tech.icon}</span>
          </div>
          <span className={`mt-2 text-xs font-medium ${tech.color}`}>{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default TechnologyIcons;
