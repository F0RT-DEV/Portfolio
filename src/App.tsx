import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ArrowUp, Code, Palette, Smartphone, Globe } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              <span className="text-blue-500">Dev</span>Portfolio
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              {['Home', 'Sobre', 'Projetos', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-blue-500 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-blue-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 mt-4">
                {['Home', 'Sobre', 'Projetos', 'Contato'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-blue-500 transition-colors duration-300 font-medium text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

{/* Hero Section */}
<section 
  id="home" 
  className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800"
  style={{
    backgroundImage: 'url(/TemaDeFundo-Home.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
  {/* Elementos de fundo animados */}
  <div className="absolute inset-0">
    {/* Círculos flutuantes */}
    <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400/15 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
    <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-600/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-300/12 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
    
    {/* Linhas geométricas */}
    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
    {/* <div className="absolute bottom-4/1 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div> */}
    
    {/* Partículas flutuantes */}
    <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
    <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
    <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>
  </div>
  
  {/* Overlay para criar o efeito de distância */}
  <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-gray-800/60"></div>
  
  <div className="container mx-auto px-6 text-center relative z-10">
    <div className="max-w-4xl mx-auto mt-20">
      {/* Badge de status */}
      <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-10 backdrop-blur-sm">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-sm text-blue-200 font-medium">Disponível para projetos</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
        Desenvolvedor Web
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        Transformando ideias em código e designs em realidade
      </p>
      <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        Criando experiências digitais excepcionais com tecnologias modernas e design intuitivo
      </p>
      
      {/* Estatísticas rápidas */}
      <div className="flex justify-center gap-8 mb-10 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">10+</div>
          <div className="text-sm text-gray-400">Projetos</div>
        </div>
        {/* <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">2+</div>
          <div className="text-sm text-gray-400">Anos</div>
        </div> */}
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">100%</div>
          <div className="text-sm text-gray-400">Dedicação</div>
        </div>
      </div>
      
      {/* Botões de ação - Movidos para baixo */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
        <button
          onClick={() => scrollToSection('projetos')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 relative overflow-hidden group"
        >
          <span className="relative z-10">Ver Projetos</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        <button
          onClick={() => scrollToSection('contato')}
          className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
        >
          Entrar em Contato
        </button>
      </div>
    </div>
  </div>
  
  {/* Scroll indicator - Movido para posição absoluta no final da seção */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
              Sobre <span className="text-blue-500">Mim</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="flex justify-center lg:justify-start">
                <img
                  src="/Foto.jpg"
                  alt="Foto do desenvolvedor"
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl border-4 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                />
              </div>
              
              <div className="space-y-6">
                {/* <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-4">
                  <Code size={16} className="text-blue-400" />
                  <span className="text-sm text-blue-300 font-medium">Desenvolvedor Full Stack</span>
                </div> */}
                
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                  Sou desenvolvedor web com foco em Front-end e conhecimentos em integração com back-end e banco de dados. Tenho experiência com criação de landing pages otimizadas, 
                  responsivas e voltadas para conversão, além de interfaces que proporcionam uma boa experiência para o usuário.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Se você busca alguém comprometido com entregas de qualidade, que escuta bem suas necessidades e transforma ideias em soluções funcionais e bonitas, estou à disposição!
                </p>
                
                {/* Skills rápidas */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Frontend', icon: <Globe size={24} />, color: 'text-blue-400' },
                    { name: 'Backend', icon: <Code size={24} />, color: 'text-green-400' },
                    { name: 'Design', icon: <Palette size={24} />, color: 'text-purple-400' },
                    { name: 'Mobile', icon: <Smartphone size={24} />, color: 'text-orange-400' }
                  ].map((skill) => (
                    <div key={skill.name} className="bg-gray-800/50 p-4 rounded-xl text-center hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-gray-600">
                      <div className={`${skill.color} mb-2 flex justify-center`}>
                        {skill.icon}
                      </div>
                      <p className="text-sm font-medium text-gray-300">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-12 text-white">
                Tecnologias que <span className="text-blue-500">Domino</span>
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Frontend */}
                <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <h4 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                    <Globe size={20} />
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['HTML5', 'CSS3', 'JavaScript', 'TailwindCSS', 'React'].map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Design */}
                <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <h4 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                    <Palette size={20} />
                    Design
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Canvas', 'Figma', 'UI/UX', 'Layout Responsivo'].map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <h4 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                    <Code size={20} />
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Express.js', 'MySQL', 'Banco de Dados'].map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Integrações */}
                <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <h4 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                    <ExternalLink size={20} />
                    Integrações
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['API REST', 'JSON', 'Axios'].map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deploy e Versionamento */}
                <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 md:col-span-2 lg:col-span-1">
                  <h4 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                    <Github size={20} />
                    Deploy & Versionamento
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'GitHub', 'Vercel', 'Netlify'].map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
              Meus <span className="text-blue-500">Projetos</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'E-commerce Platform',
                  description: 'Plataforma completa de e-commerce com carrinho, pagamentos e dashboard administrativo.',
                  technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                  image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600'
                },
                {
                  title: 'Task Management App',
                  description: 'Aplicação de gerenciamento de tarefas com drag-and-drop e colaboração em tempo real.',
                  technologies: ['TypeScript', 'React', 'Socket.io', 'PostgreSQL'],
                  image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600'
                },
                {
                  title: 'Portfolio Website',
                  description: 'Website responsivo de portfólio com animações suaves e design moderno.',
                  technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
                  image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600'
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors duration-300">
                        <Github size={16} />
                        <span className="text-sm">GitHub</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors duration-300">
                        <ExternalLink size={16} />
                        <span className="text-sm">Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
              Vamos <span className="text-blue-500">Conversar?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Entre em Contato</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Estou sempre interessado em novos projetos e oportunidades. 
                  Vamos criar algo incrível juntos!
                </p>
                
                <div className="space-y-4">
                  <a
                    href="mailto:contato@exemplo.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-blue-500 transition-colors duration-300"
                  >
                    <Mail size={20} />
                    <span>contato@exemplo.com</span>
                  </a>
                  
                  <div className="flex gap-6 mt-8">
                    <a
                      href="https://github.com"
                      className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Nome</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">E-mail</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Mensagem</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none"
                      placeholder="Sua mensagem..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 DevPortfolio. Todos os direitos reservados.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300"
            >
              <ArrowUp size={20} className="text-blue-500" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;