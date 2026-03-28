import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

function IconTile({
  children,
  className,
  accent = 'blue',
}: {
  children: React.ReactNode;
  className?: string;
  accent?: 'blue' | 'purple';
}) {
  const hoverStyles =
    accent === 'purple'
      ? 'hover:shadow-[0_10px_28px_-6px_rgba(168,85,247,0.2),0_4px_14px_-4px_rgba(15,23,42,0.1)] hover:ring-purple-200/90'
      : 'hover:shadow-[0_10px_28px_-6px_rgba(59,130,246,0.18),0_4px_14px_-4px_rgba(15,23,42,0.1)] hover:ring-blue-200/90';

  return (
    <div
      className={`flex h-12 w-12 shrink-0 origin-center items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/[0.06] transition-[transform,box-shadow,ring-width,ring-color] duration-200 ease-out hover:scale-[1.06] hover:ring-2 ${hoverStyles} motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:hover:shadow-sm motion-reduce:hover:ring-1 motion-reduce:hover:ring-slate-900/[0.06] ${className ?? ''}`}
    >
      {children}
    </div>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

function TerminalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 3.75h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );
}

function BoltIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <div
      className={`${inter.className} min-h-screen flex flex-col justify-center items-start px-8 lg:px-24 max-w-7xl mx-auto`}
    >
      <div className="space-y-12 max-w-4xl">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-semibold leading-[1.1] tracking-tight text-slate-900">
            Nice to meet you, <br />
            I&apos;m <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">Calvin.</span>
          </h1>

          <p className="text-[1.25rem] text-slate-600 max-w-2xl leading-relaxed font-normal">
            Software engineer in Trust &amp; Safety at Roblox, combining machine learning with real-world applications.
          </p>
        </div>

        <ul className="space-y-6 text-lg text-slate-700 font-normal list-none p-0 m-0">
          <li className="flex items-center gap-4">
            <IconTile>
              <MapPinIcon className="text-blue-600" />
            </IconTile>
            <span>
              Living and working in{' '}
              <strong className="font-semibold text-slate-900">San Francisco</strong>
            </span>
          </li>

          <li className="flex items-center gap-4">
            <IconTile>
              <TerminalIcon className="text-blue-600" />
            </IconTile>
            <span>
              Senior Software Engineer @{' '}
              <a
                href="https://www.roblox.com/"
                className="font-semibold text-slate-900 hover:text-accent underline-offset-2 hover:underline transition-colors"
              >
                Roblox
              </a>
            </span>
          </li>

          <li className="flex items-center gap-4">
            <IconTile accent="purple">
              <BoltIcon className="text-purple-600" />
            </IconTile>
            <span>
              Training for an{' '}
              <strong className="font-semibold text-slate-900">Ironman 70.3</strong>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
