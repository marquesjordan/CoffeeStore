import React from 'react';
import Navigation from './src/components/navigation/Navigation';
import { Provider as TicketProvider } from './src/contexts/TicketContext';


const App = () => { 
  return (
    <TicketProvider>
      <Navigation />
    </TicketProvider>
  );
}

export default App;