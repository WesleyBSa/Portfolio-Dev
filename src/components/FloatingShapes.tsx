const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-white opacity-20 rotate-45 animate-ping"></div>
    <div className="absolute top-1/2 right-1/4 w-4 h-4 md:w-6 md:h-6 bg-orange-400 opacity-30 rotate-12 animate-bounce"></div>
    <div className="absolute bottom-1/4 left-1/3 w-6 h-6 md:w-8 md:h-8 bg-orange-400 opacity-20 rounded-full animate-pulse"></div>
  </div>
);

export default FloatingShapes;
