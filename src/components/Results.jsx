import { ExternalLink } from 'lucide-react';

export default function Results({ items, loading }) {
  if (loading) {
    return (
      <div className="w-full bg-white rounded-xl border shadow-sm p-6 grid gap-3">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3" />
        <div className="h-24 bg-gray-100 rounded animate-pulse" />
        <div className="h-24 bg-gray-100 rounded animate-pulse" />
      </div>
    );
  }

  if (!items?.length) {
    return (
      <div className="w-full bg-white rounded-xl border shadow-sm p-12 text-center text-gray-500">
        Adjust filters to see opportunities
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-xl border shadow-sm divide-y">
      {items.map((op) => (
        <article key={op.id} className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 truncate">{op.title}</h3>
            <p className="text-sm text-gray-500 mt-1 truncate">
              {op.agency} • {op.contractType} • {op.setAside || 'Open'}
            </p>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{op.summary}</p>
          </div>
          <a
            href={op.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
          >
            View <ExternalLink className="h-4 w-4" />
          </a>
        </article>
      ))}
    </div>
  );
}
