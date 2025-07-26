'use client';

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-start px-8 lg:px-16 max-w-6xl mx-auto">
      <div className="space-y-6">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Nice to meet you, <br />
          I&apos;m <span className="text-yellow-500">Calvin.</span>
        </h1>
        
        <div className="space-y-4 text-lg lg:text-xl">
          <p className="flex items-center">
            <span className="mr-3 text-2xl">😍</span>
            Living and working in NYC
          </p>
          
          <p className="flex items-center">
            <span className="mr-3 text-2xl">💻</span>
            Building a modern payments platform @ <a href="https://www.clearme.com/" className="text-blue-600 hover:underline">CLEAR</a>
          </p>
          
          <p className="flex items-center">
            <span className="mr-3 text-2xl">☕</span>
            Training for a triathlon & finding new coffee shops in my free time
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 pt-8">
          <a 
            href="https://www.linkedin.com/in/calvinkorver/"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-3 rounded-lg transition-colors"
          >
            LinkedIn
          </a>
          
          <button 
            onClick={scrollToProjects}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Projects
          </button>
          
          <a 
            href="/blog"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Blog
          </a>
        </div>
      </div>
    </div>
  );
}