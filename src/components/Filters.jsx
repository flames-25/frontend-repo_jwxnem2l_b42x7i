import { useState } from 'react';

const agencies = ['DoD', 'GSA', 'DHS', 'NASA', 'HHS'];
const contractTypes = ['RFP', 'RFQ', 'RFI', 'Sources Sought'];
const vehicles = ['GWAC', 'IDIQ', 'BPA', 'Other'];

export default function Filters({ onChange }) {
  const [selected, setSelected] = useState({
    agency: '',
    contractType: '',
    vehicle: '',
    setAside: '',
  });

  function handleChange(key, value) {
    const next = { ...selected, [key]: value };
    setSelected(next);
    onChange?.(next);
  }

  return (
    <section className="w-full bg-white rounded-xl border shadow-sm p-4 sm:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Agency</label>
          <select
            value={selected.agency}
            onChange={(e) => handleChange('agency', e.target.value)}
            className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
          >
            <option value="">All</option>
            {agencies.map(a => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Contract Type</label>
          <select
            value={selected.contractType}
            onChange={(e) => handleChange('contractType', e.target.value)}
            className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
          >
            <option value="">All</option>
            {contractTypes.map(ct => (
              <option key={ct} value={ct}>{ct}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Vehicle</label>
          <select
            value={selected.vehicle}
            onChange={(e) => handleChange('vehicle', e.target.value)}
            className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
          >
            <option value="">All</option>
            {vehicles.map(v => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Set-Aside</label>
          <select
            value={selected.setAside}
            onChange={(e) => handleChange('setAside', e.target.value)}
            className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
          >
            <option value="">Any</option>
            <option value="8(a)">8(a)</option>
            <option value="WOSB">WOSB</option>
            <option value="SDVOSB">SDVOSB</option>
            <option value="HUBZone">HUBZone</option>
          </select>
        </div>
      </div>
    </section>
  );
}
