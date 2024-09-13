import { useEffect, useState } from 'react';

import { getDeals } from './api';

import { INTERVAL_TIME } from './mock';
import { IDeal } from './types';

import Dial from './components/Diall';

import './App.css';

function App() {
  const [deals, setDeals] = useState<IDeal[]>([]);
  const [selectedDeal, setSelectedDeal] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      let currentOffset = 1;
      let allDeals: IDeal[] = [];

      while (true) {
        const dealsData = await getDeals(currentOffset);
        const receivedDeals = dealsData._embedded?.leads ?? [];
        if (receivedDeals.length === 0) {
          break;
        }
        allDeals = [...allDeals, ...receivedDeals];
        currentOffset++;
        setDeals(allDeals);
        await new Promise(resolve => setTimeout(resolve, INTERVAL_TIME));
      }
    };

    fetchData();
  }, []);

  const handleClick = (id: string) => {
    setSelectedDeal(id);
  };

  return (<>
    {deals.map((deal) => (
      <Dial
        key={deal.id}
        name={deal.name}
        createdDate={deal.created_at}
        price={deal.price}
        id={deal.id}
        handleClick={handleClick}
        isSelected={selectedDeal === deal.id}
      />
    ))}
  </>);
}

export default App;
