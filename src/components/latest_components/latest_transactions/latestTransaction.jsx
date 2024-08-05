import { Utils } from 'alchemy-sdk'
import { Link } from 'react-router-dom';

const LatestTransaction = ({from, to, value, hash}) => {
  return (
    <div
    className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4"
    data-id="84"
    >
      <svg
        data-id="85"
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
        <path
          d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
        ></path>
        <path d="M13 5v2"></path>
        <path d="M13 17v2"></path>
        <path d="M13 11v2"></path>
      </svg>
      <div data-id="86">
        <Link to={`/transaction/${hash}`}>
        <p className="text-sm font-medium" style={{ color: 'blue' }} data-id="87">{hash ? `${hash.slice(0,9)}...${hash.slice(-6)}`: "loading..."}</p>
        </Link>
        <p className="text-xs text-muted-foreground" data-id="88">
          {from ? `From: ${from.slice(0,9)}...${from.slice(-6)}` : "loading..."}
        </p>
        <p className="text-xs text-muted-foreground" data-id="88">
          {to ? `To: ${to.slice(0,9)}...${to.slice(-6)}` : "loading..."}
        </p>
      </div>
      <p className="text-sm font-medium" data-id="89">{value ? `${Utils.formatEther(value).slice(0,9)} Eth` : "loading..."}</p>
    </div>
  );
};

export default LatestTransaction;