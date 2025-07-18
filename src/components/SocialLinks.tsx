import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface Props {
  mounted: boolean;
}

const SocialLinks: React.FC<Props> = ({ mounted }) => (
  <div className={`mt-8 flex justify-center gap-6 md:gap-8 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <a href="#" className="text-gray-400 hover:text-orange-300 transition-transform transform hover:scale-110">
      <Github className="w-6 h-6" />
    </a>
    <a href="#" className="text-gray-400 hover:text-orange-400 transition-transform transform hover:scale-110">
      <Linkedin className="w-6 h-6" />
    </a>
    <a href="#" className="text-gray-400 hover:text-amber-400 transition-transform transform hover:scale-110">
      <Mail className="w-6 h-6" />
    </a>
  </div>
);

export default SocialLinks;
