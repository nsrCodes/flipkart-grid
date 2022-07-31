import { ethers } from "ethers";
import { APP_CONSTANTS } from "../constants";
import Warranty from "../artifiacts/contracts/warranty.sol/warrantyToken.json";

const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(APP_CONSTANTS.CONTRACT_ADDRESS, Warranty.abi, signer);

function MintButton({ productId }) {
    const mintToken = () => {
        const conn = contract.connect(signer);
        const addr = conn.address;
        contract.payToMint(addr, `http://${APP_CONSTANTS.BACKEND_API}/product/${productId}`, {
            value: ethers.utils.parseEther('0.0'),
          })
    }
    return (
        <>
            <button onClick={mintToken}>
                Mint Token
            </button>
        </>
    )
}

export default MintButton