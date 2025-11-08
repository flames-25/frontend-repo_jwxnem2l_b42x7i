import { ExternalLink, BadgeCheck, Clock } from 'lucide-react';

export default function ResultsList({ items = [], loading = false }) {
  if (loading) return <LoadingState />;
  if (!items.length) return <EmptyState />;

  return (
    <div className="grid grid-cols-1 gap-4" id="explore">
      {items.map((op) => (
        <article key={op.id} className="group rounded-2xl bg-white/70 backdrop-blur ring-1 ring-black/5 p-4 md:p-5 shadow-sm hover:shadow-md transition">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-gray-950">
                {op.title}
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                <span className="font-medium">{op.agency}</span> • {op.contractType} • {op.vehicle} {op.setAside ? `• ${op.setAside}` : ''}
              </p>
            </div>
            <a href={op.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-gray-900 text-white px-3 py-1.5 text-xs font-medium shadow hover:bg-black">
              View <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <p className="mt-3 text-sm text-gray-700">{op.summary}</p>
          <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
            <span className="inline-flex items-center gap-1"><BadgeCheck className="h-3.5 w-3.5" /> Gov source</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> Updated just now</span>
          </div>
        </article>
      ))}
    </div>
  );
}

function LoadingState() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="animate-pulse rounded-2xl bg-white/60 ring-1 ring-black/5 p-5">
          <div className="h-5 w-2/3 bg-gray-200 rounded" />
          <div className="mt-3 h-3 w-1/2 bg-gray-200 rounded" />
          <div className="mt-4 h-12 w-full bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur ring-1 ring-black/5 p-12 text-center">
      <p className="text-base font-medium text-gray-900">No results match your filters</p>
      <p className="mt-1 text-sm text-gray-600">Try broadening your selections to discover more opportunities.</p>
    </div>
  );
}
