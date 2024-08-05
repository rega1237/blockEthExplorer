import { createPortal } from 'react-dom';
import AccountDetailsContainer from "../account_details/accountDetailsContainer";

const ModalAccount = ({alchemy, account, toggleModal}) => {
  const modalContainer = document.getElementById('modal')

  if (!modalContainer) {
    return null
  }

  return createPortal(<AccountDetailsContainer alchemy={alchemy} account={account} toggleModal={toggleModal} />, modalContainer);
}

export default ModalAccount;