import { useMemo, useState } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import Results from './components/Results';
import InfoBar from './components/InfoBar';

// Sample local dataset to demonstrate filtering UI
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

function App() {
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);

  const filtered = useMemo(() => {
    const { agency, contractType, vehicle, setAside } = filters;
    return SAMPLE_DATA.filter(op => (
      (!agency || op.agency === agency) &&
      (!contractType || op.contractType === contractType) &&
      (!vehicle || op.vehicle === vehicle) &&
      (!setAside || op.setAside === setAside)
    ));
  }, [filters]);

  function handleFilterChange(next) {
    setLoading(true);
    setFilters(next);
    // Simulate request latency for nicer UX
    setTimeout(() => setLoading(false), 400);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 text-gray-900">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
        <InfoBar />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-1 space-y-4">
            <Filters onChange={handleFilterChange} />
          </div>

          <div className="lg:col-span-2">
            <Results items={filtered} loading={loading} />
          </div>
        </div>

        <section className="mt-8 text-center text-sm text-gray-500">
          <p>
            Coming next: secure authentication and a backend connector to pull live opportunities from GovWin based on your filters.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
