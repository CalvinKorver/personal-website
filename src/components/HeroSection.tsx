export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-start px-8 lg:px-24 max-w-7xl mx-auto">
      <div className="space-y-12 max-w-4xl">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            Nice to meet you, <br />
            I&apos;m <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">Calvin.</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted max-w-2xl leading-relaxed">
            Software engineer building modern payment systems and exploring the intersection of technology and user experience.
          </p>
        </div>
        
        <div className="space-y-6 text-lg lg:text-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
              <span className="text-2xl">📍</span>
            </div>
            <span className="text-foreground">Living and working in NYC</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
              <span className="text-2xl">💻</span>
            </div>
            <span className="text-foreground">
              Building a modern payments platform @ <a href="https://www.clearme.com/" className="text-accent hover:underline font-medium transition-colors">CLEAR</a>
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
              <span className="text-2xl">☕</span>
            </div>
            <span className="text-foreground">Training for a triathlon & finding new coffee shops in my free time</span>
          </div>
        </div>
      </div>
    </div>
  );
}