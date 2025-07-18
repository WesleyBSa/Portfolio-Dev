import React from 'react';
import { ExternalLink, Download } from 'lucide-react';

interface Props {
  mounted: boolean;
}

const CallToAction: React.FC<Props> = ({ mounted }) => (
    <div className={`mt-6 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <button className="group px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold text-base md:text-lg hover:from-orange-600 hover:to-amber-600 transform transition-all duration-300 hover:scale-105 flex items-center gap-2">
        <span>Ver Projetos</span>
        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <button className="group px-6 py-3 md:px-8 md:py-4 border-2 border-slate-600/50 text-slate-200 rounded-full font-semibold text-base md:text-lg hover:border-orange-300 hover:bg-orange-500/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 backdrop-blur-sm">
        <Download className="w-5 h-5 group-hover:animate-bounce" />
        <span>Download CV</span>
        </button>
    </div>
);

export default CallToAction;
