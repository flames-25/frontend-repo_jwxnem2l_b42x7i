import { Sparkles, Search } from 'lucide-react';

export default function ElegantHeader() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow">
            <Sparkles className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-gray-900">Aster</p>
            <p className="text-xs text-gray-500">Opportunities</p>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-2 text-gray-500">
          <Search className="h-4 w-4" />
          <span className="text-sm">Refined search, beautiful results</span>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://www.govwin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-gray-900 text-white px-3 py-1.5 text-xs font-medium shadow hover:bg-black">
            GovWin
          </a>
        </div>
      </div>
    </header>
  );
}
