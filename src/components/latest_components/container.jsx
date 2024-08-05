import { useEffect, useState } from 'react'
import LatestBlocksCard from './latest_blocks/latestBlocksCard'
import LastestBlocksTransactions from './latest_transactions/latestBlocksTransactions'

const Container = ({alchemy}) => {
  const [latestBlocks, setLastestBlocks] = useState([])
  const [blockNumber, setBlockNumber] = useState();
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    async function getBlockNumber() {
      const getBlockNumber = await alchemy.core.getBlockNumber() 
      setBlockNumber(getBlockNumber);
    }

    getBlockNumber();
  },[]);

  useEffect(() => {
    async function getTransactions() {
      const blockInfo = await alchemy.core.getBlockWithTransactions(blockNumber);
      setTransactions((blockInfo.transactions).slice(-10));
    }

    if (blockNumber) {
      getTransactions();
    }
  }, [blockNumber])

  useEffect(() => {
    if(!blockNumber) return
    for (let i = 0 ; i < 10; i++) {
      setLastestBlocks(prev => [...prev, blockNumber - i])
    }
  },[blockNumber])

  return (
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2" data-id="57">
          <LatestBlocksCard alchemy={alchemy} latestBlocks={latestBlocks} />
          
          <LastestBlocksTransactions alchemy={alchemy} currentBlockTrans={transactions} />
      </div>
  )
}

export default Container