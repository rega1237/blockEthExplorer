import {useState, useEffect} from 'react'
import LatestTransaction from './latestTransaction';

const LatestBlocksTransactions = ({alchemy, currentBlockTrans}) => {
  const [latestTransactions, setLatestTransactions] = useState()

  return (
    <div
      className="rounded-lg border text-card-foreground shadow-sm bg-card py-4"
      data-id="80"
      data-v0-t="card"
    >
      <div className="mb-4" data-id="81">
        <h2 className="text-lg font-bold pl-4" data-id="82">Last Transactions</h2>
      </div>
      <div className="max-h-[300px] overflow-auto space-y-4" data-id="83">
        {currentBlockTrans ? currentBlockTrans.map((tx, index) => (
          <LatestTransaction key={index} from={tx.from} to={tx.to} hash={tx.hash} value={tx.value}  />
        )) : "loading..."}
      </div>
    </div>
  );
};

export default LatestBlocksTransactions;