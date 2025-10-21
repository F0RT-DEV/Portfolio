import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Menu, X, Github, Linkedin, ExternalLink, ArrowUp, Code, Palette, Smartphone, Globe } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

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

  const translations: Record<string, any> = {
    pt: {
      nav: ['Home', 'Sobre', 'Projetos', 'Contato'],
      available: 'Disponível para projetos',
      developer: 'Desenvolvedor Web',
      heroLine1: 'Transformando ideias em código e designs em realidade',
      heroLine2: 'Criando experiências digitais excepcionais com tecnologias modernas e design intuitivo',
      projectsCount: 'Projetos',
      dedication: 'Dedicação',
      viewProjects: 'Ver Projetos',
      contactMe: 'Entrar em Contato',
      aboutTitle: 'Sobre Mim',
      aboutDesc1: 'Sou desenvolvedor web com foco em Front-end e conhecimentos em integração com back-end e banco de dados. Tenho experiência com criação de landing pages otimizadas, responsivas e voltadas para conversão, além de interfaces que proporcionam uma boa experiência para o usuário.',
      aboutDesc2: 'Se você busca alguém comprometido com entregas de qualidade, que escuta bem suas necessidades e transforma ideias em soluções funcionais e bonitas, estou à disposição!',
      techTitle: 'Tecnologias que possuo Conhecimento',
      projectsTitle: 'Meus Projetos',
      contactTitle: 'Vamos Conversar?',
      contactSubtitle: 'Estou sempre interessado em novos projetos e oportunidades. Vamos criar algo incrível juntos!',
      contactForm: {
        name: 'Nome',
        email: 'E-mail',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
        sending: 'Enviando...'
      },
      successMsg: 'Mensagem enviada com sucesso!',
      errorMsg: 'Erro ao enviar mensagem. Tente novamente.',
      footer: '© 2024 DevPortfolio. Todos os direitos reservados.'
    },
    en: {
      nav: ['Home', 'About', 'Projects', 'Contact'],
      available: 'Available for projects',
      developer: 'Web Developer',
      heroLine1: 'Turning ideas into code and designs into reality',
      heroLine2: 'Building exceptional digital experiences with modern technologies and intuitive design',
      projectsCount: 'Projects',
      dedication: 'Dedication',
      viewProjects: 'View Projects',
      contactMe: 'Get in Touch',
      aboutTitle: 'About Me',
      aboutDesc1: "I'm a web developer focused on Front-end with knowledge in back-end integration and databases. I build responsive, conversion-oriented landing pages and user-friendly interfaces.",
      aboutDesc2: 'If you are looking for someone committed to quality deliveries, who listens to your needs and turns ideas into functional and beautiful solutions, I am available!',
      techTitle: 'Technologies I Know',
      projectsTitle: 'My Projects',
      contactTitle: "Let's Talk?",
      contactSubtitle: "I'm always interested in new projects and opportunities. Let's create something amazing together!",
      contactForm: {
        name: 'Name',
        email: 'E-mail',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...'
      },
      successMsg: 'Message sent successfully!',
      errorMsg: 'Error sending message. Please try again.',
      footer: '© 2024 DevPortfolio. All rights reserved.'
    }
  };

  const t = (key: string) => {
    const parts = key.split('.');
    let cur: any = translations[lang];
    for (const p of parts) {
      if (!cur) return key;
      cur = cur[p];
    }
    return cur ?? key;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      
      <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              <span className="text-blue-500">Jovem</span>Dev
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {t('nav').map((item: string) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-blue-500 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </nav>
            {/* Language buttons */}
            <div className="hidden md:flex items-center gap-2">
              <button onClick={() => setLang('pt')} className={`px-2 py-1 rounded ${lang === 'pt' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'}`}>PT</button>
              <button onClick={() => setLang('en')} className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'}`}>EN</button>
            </div>
            
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-blue-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 mt-4">
                {t('nav').map((item: string) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-blue-500 transition-colors duration-300 font-medium text-left"
                  >
                    {item}
                  </button>
                ))}
                <div className="flex gap-2 mt-2">
                  <button onClick={() => setLang('pt')} className={`px-2 py-1 rounded ${lang === 'pt' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'}`}>PT</button>
                  <button onClick={() => setLang('en')} className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'}`}>EN</button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

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
  
  <div className="absolute inset-0">
    
    <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400/15 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
    <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-600/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-300/12 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
    
    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
    {/* <div className="absolute bottom-4/1 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div> */}
    
    <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
    <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
    <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>
  </div>
  
  
  <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-gray-800/60"></div>
  
  <div className="container mx-auto px-6 text-center relative z-10">
    <div className="max-w-4xl mx-auto mt-20">
      
      <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-10 backdrop-blur-sm">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-sm text-blue-200 font-medium">{t('available')}</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
        {t('developer')}
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        {t('heroLine1')}
      </p>
      <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        {t('heroLine2')}
      </p>
      
      
      <div className="flex justify-center gap-8 mb-10 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">10+</div>
          <div className="text-sm text-gray-400">{t('projectsCount')}</div>
        </div>
        {/* <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">2+</div>
          <div className="text-sm text-gray-400">Anos</div>
        </div> */}
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">100%</div>
          <div className="text-sm text-gray-400">{t('dedication')}</div>
        </div>
      </div>
      
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
        <button
          onClick={() => scrollToSection('projetos')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 relative overflow-hidden group"
        >
          <span className="relative z-10">{t('viewProjects')}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        <button
          onClick={() => scrollToSection('contato')}
          className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
        >
          {t('contactMe')}
        </button>
      </div>
    </div>
  </div>
  
  
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
</section>

      
      <section id="sobre" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
              {t('aboutTitle').split(' ')[0]} <span className="text-blue-500">{t('aboutTitle').split(' ').slice(1).join(' ')}</span>
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
                
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">{t('aboutDesc1')}</p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">{t('aboutDesc2')}</p>
                
                
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

            
            <div>
              <h3 className="text-2xl font-bold text-center mb-12 text-white">
                {t('techTitle').split(' ').slice(0, -1).join(' ')} <span className="text-blue-500">{t('techTitle').split(' ').slice(-1)}</span>
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <h4 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                    <Globe size={20} />
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'TailwindCSS', 'React'].map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                
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

                
                <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <h4 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                    <Code size={20} />
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Express.js', 'MySQL', 'Banco de Dados','Firebase'].map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                
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

                
                <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 md:col-span-2 lg:col-span-1">
                  <h4 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                    <Github size={20} />
                    Deploy & Versionamento
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'GitHub', 'Render', 'Netlify'].map((tech) => (
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

      
      <section id="projetos" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
              Meus <span className="text-blue-500">Projetos</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Plataforma Didática para Curso Técnico',
                  description: 'Front-end responsivo com foco em UX e algumas animações. Projeto desenvolvido para fins educacionais em parceria com professor de ADS.',
                  technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsivo', 'Animações'],
                  image: '/PlataformaDidatica.png',
                  category: 'educacional',
                  type: '📘 Uso Educacional',
                  client: 'Professor de Análise e Desenvolvimento de Sistemas',
                  github: 'https://github.com/F0RT-DEV/FindesProjeto.git',
                  demo: 'https://plataforma-didatica.netlify.app/'
                },
                {
                  title: 'Plataforma de Serviços Técnicos',
                  description: 'Plataforma de serviços técnicos onde atuei como Líder Front-end no desenvolvimento de uma plataforma web voltada para educação, saúde e assistência social no estado do Amapá.',
                  technologies: ['React', 'JavaScript', 'CSS3', 'Node.js', 'Firebase', 'Responsivo'],
                  image: '/PlataformaGovernamental.png',
                  category: 'educacional',
                  type: '📘 Uso Educacional',
                  client: 'Projeto de Finalização do Curso',
                    github: 'https://github.com/F0RT-DEV/SistemaIntegrado.git',
                    demo: 'https://plataforma-ap.netlify.app/'
                },
                {
                  title: 'Portfolio Interativo',
                  description: 'Website responsivo de portfólio com animações suaves, design moderno e otimização para SEO. Desenvolvimento pessoal para apresentar projetos.',
                  technologies: ['React', 'Tailwind CSS', 'Responsivo', 'TypeScript', 'Vite'],
                  image: '/DesenvolvedorWeb.png',
                  category: 'pessoal',
                  type: '💡 Projeto Pessoal',
                  client: 'Desenvolvimento Próprio',
                  github: 'https://github.com/F0RT-DEV/Portfolio.git',
                  demo: '#'
                },
                {
                  title: 'E-commerce Moderno',
                  description: 'Plataforma de e-commerce completa com carrinho de compras, sistema de pagamento integrado e painel administrativo para gestão de produtos.',
                  technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsivo', 'Node.js', 'Google Cloud'],
                  image: '/projeto-ecommerce.png',
                  category: 'freelance',
                  type: '💼 Projeto Freelance',
                  client: 'Loja Virtual',
                  github: '#',
                  demo: '#'
                }
              ].map((project, index) => {
                const categoryColors = {
                  educacional: {
                    border: 'border-blue-500/30',
                    hoverBorder: 'hover:border-blue-500/60',
                    shadow: 'hover:shadow-blue-500/20',
                    accent: 'text-blue-400'
                  },
                  freelance: {
                    border: 'border-green-500/30',
                    hoverBorder: 'hover:border-green-500/60',
                    shadow: 'hover:shadow-green-500/20',
                    accent: 'text-green-400'
                  },
                  pessoal: {
                    border: 'border-purple-500/30',
                    hoverBorder: 'hover:border-purple-500/60',
                    shadow: 'hover:shadow-purple-500/20',
                    accent: 'text-purple-400'
                  }
                };

                const colors = categoryColors[project.category as keyof typeof categoryColors];

                return (
                  <div
                    key={index}
                    className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 shadow-xl ${colors.shadow} border ${colors.border} ${colors.hoverBorder} hover:transform hover:scale-[1.02] group min-h-[500px]`}
                  >
                  
                    <div className="relative h-82 overflow-hidden rounded-t-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          
                          (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600';
                        }}
                      />
                      
                      {project.title === 'E-commerce Moderno' && (
                        <div className="absolute top-6 left-6 z-20">
                          <span className="bg-yellow-500/90 text-black font-bold px-4 py-2 rounded-full shadow-lg text-xs border-2 border-yellow-700 animate-pulse">EM DESENVOLVIMENTO</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="absolute top-4 right-4">
                        <span className={`bg-gray-900/90 backdrop-blur-sm ${colors.accent} px-3 py-1.5 rounded-full text-xs font-medium border ${colors.border}`}>
                          {project.type}
                        </span>
                      </div>
                    </div>

                    
                    <div className="p-4 space-y-3 flex-1 flex flex-col">
                      
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="font-medium">Cliente:</span>
                        <span>{project.client}</span>
                      </div>

                      
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {project.title}
                      </h3>

                      
                      <p className="text-gray-300 leading-snug text-xs flex-1">
                        {project.description}
                      </p>

                      
                      <div className="space-y-2">
                        <p className="text-xs font-medium text-gray-400">Tecnologias:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`bg-gray-800/50 ${colors.accent} px-2 py-1 rounded-md text-xs font-medium border ${colors.border} hover:bg-gray-700/50 transition-colors duration-300`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      
                      <div className="flex gap-4 pt-3 border-t border-gray-700/50 mt-auto">
                        <a
                          href={project.github}
                          className={`flex items-center gap-2 ${colors.accent} hover:text-white transition-colors duration-300 text-sm font-medium hover:scale-105 transform`}
                        >
                          <Github size={16} />
                          <span>GitHub</span>
                        </a>
                        <a
                          href={project.demo}
                          className={`flex items-center gap-2 ${colors.accent} hover:text-white transition-colors duration-300 text-sm font-medium hover:scale-105 transform`}
                        >
                          <ExternalLink size={16} />
                          <span>Ver Projeto</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* <div className="text-center mt-16">
              <p className="text-gray-400 mb-6">
                Interessado em trabalhar comigo? Vamos conversar sobre seu projeto!
              </p>
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Iniciar Conversa
              </button>
            </div> */}
          </div>
        </div>
      </section>

      
      <section id="contato" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
              {t('contactTitle').split(' ')[0]} <span className="text-blue-500">{t('contactTitle').split(' ').slice(1).join(' ')}</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">{t('contactSubtitle')}</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">{t('contactSubtitle')}</p>
                
                <div className="space-y-4">
                  {/* <a
                    href="dougrasfb1@gmail.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-blue-500 transition-colors duration-300"
                  >
                    <Mail size={20} />
                    <span>dougrasfb1@gmail.com</span>
                  </a> */}
                  
                  <div className="flex gap-6 mt-8">
                    <a
                      href="https://github.com/F0RT-DEV"
                      className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/douglas-f-borges/"
                      className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-6" onSubmit={async (e) => {
                  e.preventDefault();
                  setLoading(true);
                  setSuccess('');
                  setError('');
                  try {
                    await emailjs.send(
                      'service_dgcf3uf', 
                      'template_o60vuhj', 
                      {
                        from_name: form.nome,
                        from_email: form.email,
                        message: form.mensagem,
                      },
                      '1VYoRL1QedjvDQV5l' 
                    );
                    setSuccess('Mensagem enviada com sucesso!');
                    setForm({ nome: '', email: '', mensagem: '' });
                  } catch (err) {
                    setError('Erro ao enviar mensagem. Tente novamente.');
                  }
                  setLoading(false);
                }}>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">{t('contactForm.name')}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                      placeholder={t('contactForm.name')}
                      value={form.nome}
                      onChange={e => setForm({ ...form, nome: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">{t('contactForm.email')}</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                      placeholder={t('contactForm.email')}
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">{t('contactForm.message')}</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none"
                      placeholder={t('contactForm.message')}
                      value={form.mensagem}
                      onChange={e => setForm({ ...form, mensagem: e.target.value })}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                    disabled={loading}
                  >
                    {loading ? t('contactForm.sending') : t('contactForm.send')}
                  </button>
                  {success && <p className="text-green-400 mt-2 text-center">{t('successMsg')}</p>}
                  {error && <p className="text-red-400 mt-2 text-center">{t('errorMsg')}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              {t('footer')}
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