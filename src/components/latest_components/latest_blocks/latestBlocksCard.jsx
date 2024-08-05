import { Link } from "react-router-dom";
import LatestBlock from "./latestBlock";

const LatestBlocksCard = ({ alchemy, latestBlocks }) => {
  return(
    <div
    className="rounded-lg border text-card-foreground shadow-sm bg-card py-4"
    data-id="58"
    data-v0-t="card"
    >
      <div className="mb-4" data-id="59">
        <h2 className="text-lg font-bold px-4" data-id="60">Last Blocks</h2>
      </div>
      <div className="max-h-[300px] overflow-auto space-y-4" data-id="61">
        {latestBlocks.map((block, index) => (
          <LatestBlock key={index + 1} block={block} alchemy={alchemy} />
        ))}
      </div>
    </div>
  )
}

export default LatestBlocksCard;