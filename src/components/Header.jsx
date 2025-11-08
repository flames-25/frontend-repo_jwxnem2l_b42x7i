import { Briefcase } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-10">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-indigo-600 text-white grid place-items-center shadow-sm">
            <Briefcase className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-semibold leading-tight">Gov Opportunity Finder</h1>
            <p className="text-xs text-gray-500">Filter, explore, and shortlist opportunities</p>
          </div>
        </div>
        <a
          href="https://www.govwin.com/" target="_blank" rel="noreferrer"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          Learn about GovWin →
        </a>
      </div>
    </header>
  );
}
