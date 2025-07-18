const ScrollIndicator = () => (
  <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
    <div className="flex flex-col items-center space-y-2">
      <span className="text-sm">Scroll para explorar</span>
      <div className="w-0.5 h-12 bg-gradient-to-b from-orange-400 to-transparent animate-pulse"></div>
    </div>
  </div>
);

export default ScrollIndicator;
