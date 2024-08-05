import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Utils } from 'alchemy-sdk'

import LatestTransaction from "../latest_components/latest_transactions/latestTransaction";

const BlockDetailsContainer = ({alchemy}) => {
  const [blockData, setBlockData] = useState();

  const {blockNumber} = useParams()

  useEffect(() => {
    const getBlockInfo = async () => {
      const blockNumHash = blockNumber.startsWith('0x') ? blockNumber : parseInt(blockNumber);
      const blockInfo = await alchemy.core.getBlockWithTransactions(blockNumHash);
      setBlockData(blockInfo);
    }

    if(blockNumber) {
      getBlockInfo();
    }

  }, [blockNumber]);
  
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2" data-id="18">
      <div
        className="rounded-lg border text-card-foreground shadow-sm bg-card p-4"
        data-id="19"
        data-v0-t="card"
      >
        <div className="mb-4" data-id="20">
          <h2 className="text-lg font-bold" data-id="21">
            Block Details
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4" data-id="22">
          <div data-id="23">
            <p className="text-muted-foreground" data-id="24">
              Block Hash
            </p>
            <p data-id="25">{blockData ? `${(blockData.hash).slice(0,9)}...${(blockData.hash).slice(-6)}`: "loading..."}</p>
          </div>
          <div data-id="26">
            <p className="text-muted-foreground" data-id="27">
              Block Number
            </p>
            <p data-id="28">{blockData ? blockData.number : "loading..."}</p>
          </div>
          <div data-id="29">
            <p className="text-muted-foreground" data-id="30">
              Parent Hash
            </p>
            <Link to={blockData ? `/block/${blockData.parentHash}` : ""} className="text-blue-500">
              <p data-id="31">{blockData ? `${(blockData.parentHash).slice(0,9)}...${(blockData.parentHash).slice(-6)}` : "loading..."}</p>
            </Link>
          </div>
          <div data-id="32">
            <p className="text-muted-foreground" data-id="33">
              Transactions
            </p>
            <p data-id="34">{blockData ? blockData.transactions.length : "loading..."}</p>
          </div>
          <div data-id="32">
            <p className="text-muted-foreground" data-id="33">
              Gas Limit
            </p>
            <p data-id="34">{blockData ? `${Utils.parseUnits(Utils.formatEther(blockData.gasLimit))} Wei` : "loading..."}</p>
          </div>
          <div data-id="32">
            <p className="text-muted-foreground" data-id="33">
              Gas Used
            </p>
            <p data-id="34">{blockData ? `${Utils.parseUnits(Utils.formatEther(blockData.gasUsed))} Wei` : "loading..."}</p>
          </div>
          <div data-id="32">
            <p className="text-muted-foreground" data-id="33">
              Base fee per gas
            </p>
            <p data-id="34">{blockData ? `${Utils.parseUnits(Utils.formatEther(blockData.baseFeePerGas))} Wei` : "loading..."}</p>
          </div>
          <div data-id="32">
            <p className="text-muted-foreground" data-id="33">
              Miner
            </p>
            <p data-id="34">{blockData ? `${(blockData.miner).slice(0,6)}...${(blockData.miner).slice(-6)}` : "loading..."}</p>
          </div>
        </div>
      </div>

      <div
        className="rounded-lg border text-card-foreground shadow-sm bg-card p-4"
        data-id="35"
        data-v0-t="card"
      >
        <div className="mb-4" data-id="36">
          <h2 className="text-lg font-bold" data-id="37">
            Transactions
          </h2>
        </div>
        <div className="max-h-[300px] overflow-auto space-y-4" data-id="38">
          {blockData ? blockData.transactions.map((tx, index) => (
            <LatestTransaction key={index} from={tx.from} to={tx.to} hash={tx.hash} value={tx.value}  />
          )) : "loading..."}
        </div>
      </div>
    </div>
  );
};

export default BlockDetailsContainer;
