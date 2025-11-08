import { useMemo, useState, useEffect } from 'react';
import { SlidersHorizontal } from 'lucide-react';

const OPTIONS = {
  agency: ['', 'DHS', 'GSA', 'DoD', 'NASA'],
  contractType: ['', 'RFI', 'RFP', 'RFQ', 'Sources Sought'],
  vehicle: ['', 'GWAC', 'BPA', 'IDIQ', 'Other'],
  setAside: ['', 'SDVOSB', 'WOSB', 'HUBZone'],
};

export default function FilterPanel({ onChange }) {
  const [state, setState] = useState({ agency: '', contractType: '', vehicle: '', setAside: '' });

  useEffect(() => {
    onChange?.(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  function update(key, value) {
    setState(prev => ({ ...prev, [key]: value }));
  }

  return (
    <aside className="rounded-2xl bg-white/70 backdrop-blur ring-1 ring-black/5 p-4 md:p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white"><SlidersHorizontal className="h-4 w-4" /></span>
        <div>
          <p className="text-sm font-semibold text-gray-900">Filters</p>
          <p className="text-xs text-gray-500">Refine the results</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <SelectField label="Agency" value={state.agency} onChange={v => update('agency', v)} options={OPTIONS.agency} />
        <SelectField label="Contract Type" value={state.contractType} onChange={v => update('contractType', v)} options={OPTIONS.contractType} />
        <SelectField label="Vehicle" value={state.vehicle} onChange={v => update('vehicle', v)} options={OPTIONS.vehicle} />
        <SelectField label="Set-Aside" value={state.setAside} onChange={v => update('setAside', v)} options={OPTIONS.setAside} />
      </div>
    </aside>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-gray-700 mb-1">{label}</span>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full appearance-none rounded-xl border border-black/10 bg-white/80 px-3 py-2.5 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
      >
        {options.map((opt, i) => (
          <option key={i} value={opt}>{opt || 'Any'}</option>
        ))}
      </select>
    </label>
  );
}
