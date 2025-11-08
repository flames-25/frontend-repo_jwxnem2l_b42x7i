import { ShieldCheck, Link as LinkIcon, Cloud } from 'lucide-react';

export default function InfoBar() {
  return (
    <div className="w-full rounded-xl border bg-gradient-to-r from-indigo-50 to-blue-50 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm">
      <div className="flex items-center gap-2 text-indigo-700">
        <ShieldCheck className="h-4 w-4" />
        <span className="font-medium">Future integration</span>
      </div>
      <p className="text-gray-600">
        This prototype filters opportunities locally. Next, we'll securely connect to GovWin to fetch live data.
      </p>
      <div className="flex items-center gap-2 text-gray-500 ml-auto">
        <Cloud className="h-4 w-4" />
        <a className="underline decoration-dotted" href="https://www.govwin.com/" target="_blank" rel="noreferrer">
          govwin.com
        </a>
        <LinkIcon className="h-4 w-4" />
      </div>
    </div>
  );
}
