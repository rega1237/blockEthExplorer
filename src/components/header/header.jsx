import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalAccount from "../modal/ModalAccount";

const Header = ({alchemy, setAccount, toggleModal}) => {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate()

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    if (searchValue.startsWith('0x') && searchValue.length === 42) {
      setAccount(searchValue)
      toggleModal();
    } else if (searchValue.startsWith('0x') && value.length === 66) {
      navigate(`/transaction/${searchValue}`)
    } else if (searchValue === parseInt(searchValue, 10).toString()) {
      navigate(`/block/${searchValue}`)
    }
  }

  return (
    <>
      <header className="bg-primary py-6 px-4 md:px-6" data-id="2">
        <div
          className="container mx-auto flex items-center justify-between"
          data-id="3"
        >
          <h1
            className="text-2xl font-bold text-primary-foreground"
            data-id="4"
          >
            <Link to="/">Eth Block Explorer</Link>
          </h1>
          <div className="relative w-full max-w-md" data-id="5">
            <input
              className="flex h-10 border border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-md bg-primary-foreground px-4 py-2 text-primary focus:outline-none focus:ring-2 focus:ring-primary-foreground"
              placeholder="Search by block hash or wallet address"
              data-id="6"
              type="search"
              onChange={handleSearchValue}
            />
            <svg
              data-id="7"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 text-primary"
              onClick={handleSearch}
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
