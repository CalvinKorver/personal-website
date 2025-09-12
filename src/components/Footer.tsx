export default function Footer() {
  return (
    <footer className="bg-card-bg border-t border-border py-8 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-2">
          <p className="flex items-center justify-center text-muted text-lg">
            🤖
          </p>
          <div className="flex items-center gap-4">
            <span className="">Want to say hello? <a className="text-blue-700 underline" href="mailto:calvin.korver@gmail.com">Email me</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}