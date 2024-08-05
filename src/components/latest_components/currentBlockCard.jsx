import { useEffect, useState } from "react";

const CurrentBlockCard = ({ alchemy }) => {
  const [blockNumber, setBlockNumber] = useState();
  const [ethPrice, setEthPrice] = useState();

  const url = "https://api.etherscan.io/api?module=stats&action=ethprice&apikey=NEXZN448YMYXP2AE8QI8MTUQ7AGTFHITVV";

  useEffect(() => {
    const getCurrentBlockPrice = async () => {
      try {
        const getBlockNumber = await alchemy.core.getBlockNumber()
        const getEthPrice = await fetch(url)
        const data = await getEthPrice.json();
        setBlockNumber(getBlockNumber);
        setEthPrice(data.result.ethusd)
      } catch {
        console.error(error)
      }
    }

    getCurrentBlockPrice()
  },[]);

  useEffect(() => {

  }, [])
  return (
    <div
    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    data-id="9"
  >
    <div
      className="rounded-lg border text-card-foreground shadow-sm bg-card p-4"
      data-id="10"
      data-v0-t="card"
    >
      <div className="flex items-center justify-between" data-id="11">
        <div data-id="12">
          <h2 className="text-lg font-bold" data-id="13">Latest Block</h2>
          <p className="text-muted-foreground" data-id="14">{blockNumber? blockNumber : "loading..."}</p>
        </div>
        <div data-id="15">
          <h2 className="text-lg font-bold" data-id="16">Eth Price</h2>
          <p className="text-muted-foreground" data-id="17">{ethPrice ? `${ethPrice.slice(0,8)} USD` : "loading..."}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CurrentBlockCard;