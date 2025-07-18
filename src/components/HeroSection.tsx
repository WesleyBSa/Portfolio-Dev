const Hero = () => (
  <div className="mb-8 text-center">
    <h2 className="text-lg md:text-xl text-purple-300 mb-4 font-medium">
      Olá, eu sou
    </h2>
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
      Seu Nome
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
        Desenvolvedor
      </span>
    </h1>
    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
      Desenvolvedor Full Stack especializado em criar experiências digitais 
      <span className="text-purple-400 font-semibold"> modernas e performáticas</span>
    </p>
  </div>
);

export default Hero;
