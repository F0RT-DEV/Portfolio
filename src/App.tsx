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
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
              Desenvolvedor Web
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transformando ideias em código e designs em realidade
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Criando experiências digitais excepcionais com tecnologias modernas e design intuitivo
            </p>
            <button
              onClick={() => scrollToSection('projetos')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Ver Projetos
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
              Sobre <span className="text-blue-500">Mim</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-48 h-48 mx-auto md:mx-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-8">
                  <div className="w-44 h-44 bg-gray-800 rounded-full flex items-center justify-center">
                    <Code size={80} className="text-blue-500" />
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Sou um desenvolvedor web apaixonado por criar soluções digitais inovadoras e funcionais. 
                  Com experiência em tecnologias modernas, transformo conceitos em aplicações web robustas e intuitivas.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Minha jornada no desenvolvimento web é movida pela curiosidade constante e pelo desejo de 
                  aprender novas tecnologias para entregar as melhores experiências aos usuários.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Frontend', icon: <Globe size={24} /> },
                    { name: 'Backend', icon: <Code size={24} /> },
                    { name: 'Design', icon: <Palette size={24} /> },
                    { name: 'Mobile', icon: <Smartphone size={24} /> }
                  ].map((skill) => (
                    <div key={skill.name} className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300">
                      <div className="text-blue-500 mb-2 flex justify-center">
                        {skill.icon}
                      </div>
                      <p className="text-sm font-medium">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8 text-white">
                Tecnologias que <span className="text-blue-500">Domino</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 
                  'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Git', 'AWS'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-800 text-blue-400 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
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