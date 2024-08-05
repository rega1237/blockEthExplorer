import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/header/header';
import CurrentBlockCard from './components/latest_components/currentBlockCard';
import Container from './components/latest_components/container';
import BlockDetailsContainer from './components/block_details/blockDetailsContainer';
import TransactionDetailsContainer from './components/transaction_details/transactionDetailsContainer';
import AccountDetailsContainer from './components/account_details/accountDetailsContainer';

import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'

import './App.css';


// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: import.meta.env.VITE_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

TimeAgo.addDefaultLocale(en)

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return(
    <>
    <Router>
      <Header alchemy={alchemy} isModalOpen={isModalOpen} toggleModal={toggleModal} />
      <main className="container mx-auto py-8 px-4 md:px-6">
      <CurrentBlockCard alchemy={alchemy} />
        <Routes>
          <Route path="/" element={<Container alchemy={alchemy} />} />
          <Route path="/block/:blockNumber" element={<BlockDetailsContainer alchemy={alchemy} />} />
          <Route path="/transaction/:transactionHash" element={<TransactionDetailsContainer alchemy={alchemy} isModalOpen={isModalOpen} toggleModal={toggleModal} />} />
        </Routes>
      </main>
    </Router>
    </>
  );
}

export default App;
