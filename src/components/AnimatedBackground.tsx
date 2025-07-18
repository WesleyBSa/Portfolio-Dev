const AnimatedBackground = () => (
  <div className="absolute inset-0">
    <div className="absolute top-10 left-10 w-48 h-48 md:w-72 md:h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
    <div className="absolute top-40 right-10 w-64 h-64 md:w-96 md:h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1000"></div>
    <div className="absolute bottom-10 left-1/2 w-56 h-56 md:w-80 md:h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-2000"></div>
    <div className="absolute top-1/2 left-20 w-40 h-40 md:w-60 md:h-60 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-3000"></div>
    <div className="absolute bottom-32 right-20 w-44 h-44 md:w-64 md:h-64 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-4000"></div>
  </div>
);

export default AnimatedBackground;