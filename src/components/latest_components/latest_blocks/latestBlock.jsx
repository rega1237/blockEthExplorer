import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import ReactTimeAgo from 'react-time-ago'

const LatestBlock = ({ block, alchemy }) => {
  const [blockWithTrans, setBlockWithTrans] = useState()

  useEffect(() => {
    async function getTransactions() {
      const blockInfo = await alchemy.core.getBlockWithTransactions(block);
      setBlockWithTrans(blockInfo);
    }

    if (block) {
      getTransactions()
    }
  }, [block]);

  return (
    <div
    className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4"
    data-id="62"
    >
      <svg
        data-id="63"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-muted-foreground"
      >
        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
        <path
          d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"
        ></path>
      </svg>
      <div data-id="64">
        <Link to={`/block/${block}`} className="text-sm font-medium" style={{ color: 'blue' }} data-id="65">{block}</Link>
        <p className="text-xs text-muted-foreground" data-id="66">
        {blockWithTrans ? <ReactTimeAgo date={new Date(blockWithTrans.timestamp * 1000)} locale="en-US"/> : "loading..."}
        </p>
      </div>
      <p className="text-sm font-medium" data-id="67">{`${blockWithTrans ? blockWithTrans.transactions.length : "loading..."}  Txns`}</p>
    </div>
  )
}

export default LatestBlock;