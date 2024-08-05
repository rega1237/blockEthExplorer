import { useEffect, useState } from "react";
import { Utils } from "alchemy-sdk";

const AccountDetailsContainer = ({ alchemy, account, toggleModal }) => {
  const [accountBalance, setAccountBalance] = useState();

  useEffect(() => {
    const getAccountBalance = async () => {
      const response = await alchemy.core.getBalance(account, "latest");

      setAccountBalance(Utils.formatEther(response._hex));
    };

    if (account) {
      getAccountBalance();
    }
  }, [account]);

  return (
    <div className="w-full h-full">
      <div
        id="modal-bg"
        className="w-full h-[100vh] bg-[#848A97] top-0 fixed"
      ></div>
      <div
        id="modal-box"
        className="w-[90%] md:w-[70%] lg:w-[50%] min-h-[50vh] flex flex-col items-center justify-center gap-5 -translate-y-1/2 p-6 bg-[#FFFFEB] rounded-lg top-1/2 left-1/2 -translate-x-1/2 fixed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="w-11 h-11"
        >
          {" "}
          <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
        </svg>
        <span className="md:text-lg lg:text-xl font-medium tracking-wider">
          {account}
        </span>
        <p className="text-center lg:text-xl tracking-wider">
          Account Balance:{" "}
          {accountBalance ? `${accountBalance} ETH` : "loading..."}
        </p>
        <button
          id="modal-close"
          className="p-3 bg-primary rounded-lg w-full text-white"
          onClick={toggleModal}
        >
          Back to transactions
        </button>
      </div>
    </div>
  );
};

export default AccountDetailsContainer;
