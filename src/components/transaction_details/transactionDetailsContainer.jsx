import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Utils } from "alchemy-sdk";

import ModalAccount from "../modal/ModalAccount";

const TransactionDetailsContainer = ({ alchemy, toggleModal, setAccount }) => {
  const [transactionData, setTransactionInfo] = useState();
  const { transactionHash } = useParams();

  useEffect(() => {
    const getTransaction = async () => {
      const transactionInfo = await alchemy.core.getTransaction(
        transactionHash
      );
      setTransactionInfo(transactionInfo);
    };

    if (transactionHash) {
      getTransaction();
    }
  }, []);

  const handleAccount = (modalAccount) => {
    setAccount(modalAccount);
    toggleModal();
  };

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-6" data-id="18">
        <div
          className="rounded-lg border text-card-foreground shadow-sm bg-card p-4 w-full"
          data-id="19"
          data-v0-t="card"
        >
          <div className="mb-4" data-id="20">
            <h2 className="text-lg font-bold" data-id="21">
              Transaction Details
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4" data-id="22">
            <div data-id="23">
              <p className="text-muted-foreground" data-id="24">
                Block Hash
              </p>
              <Link
                to={`/block/${
                  transactionData ? transactionData.blockHash : ""
                }`}
                className="text-blue-500 text-xs md:text-base hidden md:block"
              >
                <p data-id="25">
                  {transactionData ? transactionData.blockHash : "loading..."}
                </p>
              </Link>
              <Link
                to={`/block/${
                  transactionData ? transactionData.blockHash : ""
                }`}
                className="text-blue-500 text-lg md:hidden"
              >
                <p data-id="25">
                  {transactionData
                    ? `${transactionData.blockHash.slice(
                        0,
                        6
                      )}...${transactionData.blockHash.slice(-6)}`
                    : "loading..."}
                </p>
              </Link>
            </div>
            <div data-id="29">
              <p className="text-muted-foreground" data-id="30">
                Transaction Hash
              </p>
              <p data-id="31" className="hidden md:block">
                {transactionData ? transactionData.hash : "loading..."}
              </p>
              <p data-id="31" className="text-lg md:hidden">
                {transactionData
                  ? `${transactionData.hash.slice(
                      0,
                      6
                    )}...${transactionData.hash.slice(-6)}`
                  : "loading..."}
              </p>
            </div>
            <div data-id="35">
              <p className="text-muted-foreground" data-id="36">
                R
              </p>
              <p data-id="37" className="hidden md:block">
                {transactionData ? transactionData.r : "loading..."}
              </p>
              <p data-id="31" className="text-lg md:hidden">
                {transactionData
                  ? `${transactionData.r.slice(
                      0,
                      6
                    )}...${transactionData.r.slice(-6)}`
                  : "loading..."}
              </p>
            </div>
            <div data-id="38">
              <p className="text-muted-foreground" data-id="39">
                S
              </p>
              <p data-id="40" className="hidden md:block">
                {transactionData ? transactionData.s : "loading..."}
              </p>
              <p data-id="31" className="text-lg md:hidden">
                {transactionData
                  ? `${transactionData.s.slice(
                      0,
                      6
                    )}...${transactionData.s.slice(-6)}`
                  : "loading..."}
              </p>
            </div>
            <div data-id="41">
              <p className="text-muted-foreground" data-id="42">
                V
              </p>
              <p data-id="43" className="text-xs md:text-base">
                {transactionData ? transactionData.v : "loading..."}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
            <div data-id="26">
              <p className="text-muted-foreground" data-id="27">
                Block Number
              </p>
              <p data-id="28">
                {transactionData ? transactionData.blockNumber : "loading..."}
              </p>
            </div>
            <div data-id="32">
              <p className="text-muted-foreground" data-id="33">
                Confirmations
              </p>
              <p data-id="34">
                {transactionData ? transactionData.confirmations : "loading..."}
              </p>
            </div>
            <div data-id="47">
              <p className="text-muted-foreground" data-id="48">
                From
              </p>
              <p
                data-id="49"
                className="text-blue-500 cursor-pointer hidden md:block"
                onClick={() => handleAccount(transactionData.from)}
              >
                {transactionData ? transactionData.from : "loading..."}
              </p>
              <p
                data-id="49"
                className="text-blue-500 cursor-pointer md:hidden"
                onClick={() => handleAccount(transactionData.from)}
              >
                {transactionData
                  ? `${transactionData.from.slice(
                      0,
                      6
                    )}...${transactionData.from.slice(-6)}`
                  : "loading..."}
              </p>
            </div>
            <div data-id="53">
              <p className="text-muted-foreground" data-id="54">
                To
              </p>
              <p
                data-id="55"
                className="text-blue-500 cursor-pointer hidden md:block"
                onClick={() => handleAccount(transactionData.to)}
              >
                {transactionData ? transactionData.to : "loading..."}
              </p>
              <p
                data-id="49"
                className="text-blue-500 cursor-pointer md:hidden"
                onClick={() => handleAccount(transactionData.to)}
              >
                {transactionData
                  ? `${transactionData.to.slice(
                      0,
                      6
                    )}...${transactionData.to.slice(-6)}`
                  : "loading..."}
              </p>
            </div>
            <div data-id="44">
              <p className="text-muted-foreground" data-id="45">
                Gas Price
              </p>
              <p data-id="46">
                {transactionData
                  ? `${Utils.parseUnits(
                      Utils.formatEther(transactionData.gasPrice)
                    )} Wei`
                  : "loading..."}
              </p>
            </div>
            <div data-id="44">
              <p className="text-muted-foreground" data-id="45">
                Max fee per gas
              </p>
              <p data-id="46">
                {transactionData
                  ? `${Utils.parseUnits(
                      Utils.formatEther(transactionData.maxFeePerGas)
                    )} Wei`
                  : "loading..."}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground" data-id="51">
                Transaction Index
              </p>
              <p data-id="52">
                {transactionData
                  ? transactionData.transactionIndex
                  : "loading..."}
              </p>
            </div>
            <div data-id="59">
              <p className="text-muted-foreground" data-id="60">
                Value
              </p>
              <p data-id="61">
                {transactionData
                  ? `${Utils.formatEther(transactionData.value)} Eth`
                  : "loading..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionDetailsContainer;
