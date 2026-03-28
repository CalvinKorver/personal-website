export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-start px-8 lg:px-24 max-w-7xl mx-auto">
      <div className="space-y-12 max-w-4xl">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-semibold leading-[1.1] tracking-tight">
            Nice to meet you, <br />
            I&apos;m <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">Calvin.</span>
          </h1>

          <p className="text-[1.25rem] text-muted max-w-2xl leading-relaxed font-light">
            Software engineer in Trust &amp; Safety at Roblox, combining machine learning with real-world applications.
          </p>
        </div>

        <div className="space-y-6 text-lg lg:text-lg font-light">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
              <span className="text-2xl">📍</span>
            </div>
            <span className="">Living and working in San Francisco</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
              <span className="text-2xl">💻</span>
            </div>
            <span className="">
              Trust &amp; Safety @{' '}
              <a
                href="https://www.roblox.com/"
                className="text-accent hover:underline font-normal transition-colors"
              >
                Roblox
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
              <span className="text-2xl">☕</span>
            </div>
            <span className="">Training for an Ironman 70.3</span>
          </div>
        </div>
      </div>
    </div>
  );
}
