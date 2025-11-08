import { useMemo, useState } from 'react';
import ElegantHeader from './components/ElegantHeader';
import Hero from './components/Hero';
import FilterPanel from './components/FilterPanel';
import ResultsList from './components/ResultsList';
import InfoBar from './components/InfoBar';

const SAMPLE_DATA = [
  {
    id: '1',
    title: 'Cybersecurity Operations Support',
    agency: 'DHS',
    contractType: 'RFP',
    vehicle: 'IDIQ',
    setAside: 'SDVOSB',
    summary: 'Provide 24/7 SOC monitoring, incident response, and vulnerability management.',
    link: 'https://www.govwin.com/neo/opportunity/view/id/1',
  },
  {
    id: '2',
    title: 'Cloud Migration and Optimization Services',
    agency: 'GSA',
    contractType: 'RFQ',
    vehicle: 'BPA',
    setAside: 'WOSB',
    summary: 'Lift-and-shift workloads to FedRAMP authorized clouds and optimize spend.',
    link: 'https://www.govwin.com/neo/opportunity/view/id/2',
  },
  {
    id: '3',
    title: 'Satellite Communications Support',
    agency: 'DoD',
    contractType: 'RFI',
    vehicle: 'GWAC',
    setAside: '',
    summary: 'Market research for next-gen satellite comms architecture and resiliency.',
    link: 'https://www.govwin.com/neo/opportunity/view/id/3',
  },
  {
    id: '4',
    title: 'Human Landing System Maintenance',
    agency: 'NASA',
    contractType: 'Sources Sought',
    vehicle: 'Other',
    setAside: 'HUBZone',
    summary: 'Support and maintenance for lunar lander systems and ground operations.',
    link: 'https://www.govwin.com/neo/opportunity/view/id/4',
  },
];

export default function App() {
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);

  const filtered = useMemo(() => {
    const { agency, contractType, vehicle, setAside } = filters;
    return SAMPLE_DATA.filter((op) =>
      (!agency || op.agency === agency) &&
      (!contractType || op.contractType === contractType) &&
      (!vehicle || op.vehicle === vehicle) &&
      (!setAside || op.setAside === setAside)
    );
  }, [filters]);

  function handleFilterChange(next) {
    setLoading(true);
    setFilters(next);
    setTimeout(() => setLoading(false), 350);
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <ElegantHeader />
      <Hero />

      <main className="mx-auto max-w-7xl px-4 py-10 space-y-8">
        <InfoBar />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-1">
            <FilterPanel onChange={handleFilterChange} />
          </div>
          <div className="lg:col-span-2">
            <ResultsList items={filtered} loading={loading} />
          </div>
        </div>
      </main>

      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-500">
          <p>Crafted for elegance and clarity. Ready for secure GovWin integration when you are.</p>
        </div>
      </footer>
    </div>
  );
}
