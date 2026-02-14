import { useEffect, useRef } from 'react';

function App() {

  const observerRef = useRef<IntersectionObserver | null>(null);

useEffect(() => {
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  observerRef.current = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const elements = document.querySelectorAll<HTMLElement>(
    '.animate-fade-in-up, .animate-scale-in'
  );

  elements.forEach((el) => {
    observerRef.current?.observe(el);
  });

  return () => {
    observerRef.current?.disconnect();
  };
}, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const target = document.querySelector(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

  return (
    <div className="relative bg-[#242424] text-[#f8fafc] overflow-x-hidden">
      {/* Grain overlay */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] z-[100]" 
           style={{
             backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
           }} />

      {/* Gradient background */}
      <div className="absolute top-[-50%] left-[-25%] w-[150%] h-[150%] pointer-events-none animate-float"
           style={{
             background: "radial-gradient(circle at 30% 20%, #242424 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(72, 72, 72, 0.1) 0%, transparent 50%)"
           }} />

      {/* Navigation */}
      <header className="relative z-50 border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#484848] to-[#242424] rounded-lg flex items-center justify-center">
                <img src='./logo_pandapm.png' className="text-white font-bold text-xl" style={{ fontFamily: 'Syne, sans-serif' }}/>
              </div>
              <span className="text-2xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>PandaPM</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-gray-300 hover:text-white transition-colors relative group">
                Home
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#484848] transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#features" onClick={(e) => scrollToSection(e, '#features')} className="text-gray-300 hover:text-white transition-colors relative group">
                Features
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#484848] transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="text-gray-300 hover:text-white transition-colors relative group">
                Pricing
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#484848] transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="text-gray-300 hover:text-white transition-colors relative group">
                Contact
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#484848] transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
            <button className="px-8 py-3 bg-[#484848] hover:bg-[#5a5a5a] text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(72,72,72,0.4)]">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative container mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in-up opacity-0 delay-100" style={{ fontFamily: 'Syne, sans-serif' }}>
              Transform <span className="bg-gradient-to-r from-[#404040] to-[#484848] bg-clip-text text-transparent">Goals</span> into Concrete Steps
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed animate-fade-in-up opacity-0 delay-200" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Desktop SaaS software that converts your goals and questions into an automatically managed Kanban board. Artificial intelligence identifies the tasks you can complete most quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 delay-300">
              <button className="px-8 py-3 bg-[#484848] hover:bg-[#5a5a5a] text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(72,72,72,0.4)]">
                Try for Free
              </button>
              <button className="px-8 py-3 bg-transparent text-[#484848] border-2 border-[#484848] hover:bg-[#484848] hover:text-white font-semibold rounded-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>
            <div className="flex items-center space-x-8 text-sm text-gray-400 animate-fade-in-up opacity-0 delay-400">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span>Desktop App</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span>Integrated AI</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span>No Complex Setup</span>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-[600px] mx-auto animate-scale-in opacity-0 delay-200">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-[#484848]/30 shadow-2xl">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-[#484848]/10 border border-[#484848]/30 rounded-lg p-3 min-h-[120px]">
                  <div className="text-xs font-semibold text-gray-400 mb-2">TO DO</div>
                  <div className="bg-[#1e293b] rounded-md p-2 mb-2 text-xs border-l-3 border-l-[#484848]">Define project scope</div>
                  <div className="bg-[#1e293b] rounded-md p-2 text-xs border-l-3 border-l-[#484848]">Research tools</div>
                </div>
                <div className="bg-[#484848]/10 border border-[#484848]/30 rounded-lg p-3 min-h-[120px]">
                  <div className="text-xs font-semibold text-gray-400 mb-2">IN PROGRESS</div>
                  <div className="bg-[#1e293b] rounded-md p-2 text-xs border-l-3 border-l-[#484848]">Create wireframes</div>
                </div>
                <div className="bg-[#484848]/10 border border-[#484848]/30 rounded-lg p-3 min-h-[120px]">
                  <div className="text-xs font-semibold text-gray-400 mb-2">DONE</div>
                  <div className="bg-[#1e293b] rounded-md p-2 text-xs border-l-3 border-l-[#484848]">Initial meeting</div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-[#484848]/20 border border-[#484848]/30 rounded-lg">
                <div className="flex items-center space-x-2 text-sm">
                  <svg className="w-4 h-4 text-[#FFFFFF] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>
                  </svg>
                  <span className="text-gray-300 font-medium">Suggestion: Complete "Research tools" first (15 min)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative container mx-auto px-6 py-24 border-t border-gray-800">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Powerful Features</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Everything you need to transform ideas into measurable results</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>,
              title: "Automatic Step Generation",
              description: "Describe your goal or question and receive a detailed action plan, organized into executable tasks in Kanban format.",
              delay: "delay-100"
            },
            {
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>,
              title: "Intelligent Prioritization",
              description: "LangChain agent analyzes your tasks and indicates which ones can be completed more quickly, optimizing your time.",
              delay: "delay-200"
            },
            {
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>,
              title: "Visual Project Management",
              description: "Automatically managed Kanban board keeps you focused on what matters, with real-time updates.",
              delay: "delay-300"
            },
            {
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>,
              title: "Desktop Application",
              description: "Simple installation on your computer. Work offline when needed and sync when reconnecting.",
              delay: "delay-400"
            },
            {
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>,
              title: "For Businesses and Individuals",
              description: "Flexible enough to manage complex corporate projects or daily personal goals.",
              delay: "delay-500"
            },
            {
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>,
              title: "Save Time",
              description: "Smart notifications alert you about quick tasks that can be completed between other activities.",
              delay: "delay-600"
            }
          ].map((feature, index) => (
            <div key={index} className={`bg-[#1e293b] border border-[#484848]/20 rounded-2xl p-8 transition-all duration-300 hover:border-[#484848] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(72,72,72,0.2)] animate-fade-in-up opacity-0 ${feature.delay}`}>
              <div className="w-12 h-12 bg-gradient-to-br from-[#484848] to-[#242424] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="relative container mx-auto px-6 py-24 border-t border-gray-800">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>How It Works</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Three simple steps to start achieving your goals</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {[
            { step: "1", title: "Describe Your Goal", description: "Type what you want to achieve or the question you need to solve. Be specific or general, the AI understands." },
            { step: "2", title: "Receive the Steps", description: "The LangChain agent processes your goal and generates a detailed action plan, organized in a Kanban board." },
            { step: "3", title: "Execute and Track", description: "Follow prioritization suggestions, mark tasks as complete, and see your progress in real-time." }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#484848] to-[#242424] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
                {item.step}
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative container mx-auto px-6 py-24 border-t border-gray-800">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Plans and Pricing</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Choose the ideal plan for your needs. All plans include the AI agent.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Starter",
              description: "To validate ideas and organize personal projects",
              price: "$9",
              features: [
                "Up to 3 active projects",
                "Intelligent breakdown with AI",
                "Up to 2 levels of decomposition per project",
                "Automatic prioritization",
                "Dynamic Kanban board",
                "Email support"
              ],
              popular: false
            },
            {
              name: "Professional",
              description: "For professionals who execute with consistency",
              price: "$29",
              features: [
                "Up to 7 active projects",
                "Deep and iterative breakdown",
                "Automatic plan restructuring",
                "Context and progress memory",
                "Productivity analysis",
                "Report export",
                "Priority support"
              ],
              popular: true
            },
            {
              name: "Business",
              description: "For founders, teams, and complex projects",
              price: "$59",
              features: [
                "Unlimited projects",
                "Advanced multi-level decomposition",
                "Dynamic adjustment based on performance",
                "Automatic strategic prioritization",
                "Real-time collaboration",
                "Executive dashboard",
                "Integrations (Notion, Google, etc.)",
                "24/7 dedicated support"
              ],
              popular: false
            }
          ].map((plan, index) => (
            <div key={index} className={`relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 transition-all duration-400 hover:-translate-y-2 hover:scale-[1.02] ${plan.popular ? 'border-2 border-[#484848] shadow-[0_25px_50px_rgba(72,72,72,0.3)]' : 'border-2 border-[#484848]/30 hover:border-[#484848] hover:shadow-[0_25px_50px_rgba(72,72,72,0.3)]'}`}>
              {plan.popular && (
                <div className="absolute top-[-12px] right-5 bg-[#484848] text-white px-4 py-1 text-xs font-bold tracking-wider rounded">
                  POPULAR
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{plan.name}</h3>
                <p className="text-gray-400">{plan.description}</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>{plan.price}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full px-8 py-3 font-semibold rounded-lg transition-all duration-300 ${plan.popular ? 'bg-[#484848] hover:bg-[#5a5a5a] text-white hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(72,72,72,0.4)]' : 'bg-transparent text-[#484848] border-2 border-[#484848] hover:bg-[#484848] hover:text-white'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-400">
          <p>All plans include a 14-day free trial. Cancel anytime.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative container mx-auto px-6 py-24 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>Ready to Transform Your Ideas into Action?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Join hundreds of professionals and companies already achieving their goals faster with PandaPM.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#484848] hover:bg-[#5a5a5a] text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(72,72,72,0.4)]">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-transparent text-[#484848] text-lg border-2 border-[#484848] hover:bg-[#484848] hover:text-white font-semibold rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative container mx-auto px-6 py-24 border-t border-gray-800">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Get in Touch</h2>
            <p className="text-xl text-gray-400">Have questions? We're here to help.</p>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#484848] transition" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#484848] transition" placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#484848] transition" placeholder="How can we help?" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea rows={5} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#484848] transition resize-none" placeholder="Tell us more about your needs..." />
            </div>
            <button className="w-full px-8 py-3 bg-[#484848] hover:bg-[#5a5a5a] text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(72,72,72,0.4)]">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-800 mt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#484848] to-[#242424] rounded-lg flex items-center justify-center">
                  <img src='./logo_pandapm.png' className="text-white font-bold text-xl" style={{ fontFamily: 'Syne, sans-serif' }}/>
                </div>
                <span className="text-2xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>PandaPM</span>
              </div>
              <p className="text-gray-400 text-sm">Transforming goals into results since 2024.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#features" onClick={(e) => scrollToSection(e, '#features')} className="hover:text-white transition">Features</a></li>
                <li><a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Updates</a></li>
                <li><a href="#" className="hover:text-white transition">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">2024 PandaPM. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Manrope:wght@300;400;500;600&display=swap');

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(2deg); }
          66% { transform: translate(-20px, 20px) rotate(-2deg); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
}

export default App;