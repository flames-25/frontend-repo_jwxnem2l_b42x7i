import { Info } from 'lucide-react';

export default function InfoBar() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-pink-500/10 ring-1 ring-black/5 p-4">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/80 text-violet-700 ring-1 ring-black/5"><Info className="h-4 w-4" /></span>
          <div className="text-sm text-gray-700">
            <p className="font-medium text-gray-900">Prototype mode</p>
            <p>This experience uses local sample data. We can securely connect to GovWin and add authentication when you’re ready.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
