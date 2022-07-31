import { ethers } from "ethers";

import Warranty from "../artifiacts/contracts/warranty.sol/warrantyToken.json";
import WalletBalance from "./WalletBalance";

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; 
const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(contractAddress, Warranty.abi, signer);

function Home2() {
    const mintToken = () => {
        const ipfsuri = "ipfs://bafkreic6ov4qo4ucd4g4uuyve4h72nc4y2lg7ugtq3n3vxnfp3lojvtmdu";
        const jsonURI = "https://baconipsum.com/api/?type=meat-and-filler";

        const conn = contract.connect(signer);
        const addr = conn.address;
        contract.payToMint(addr, jsonURI, {
            value: ethers.utils.parseEther('0.0'),
          })
    }
    return (
        <>
        <WalletBalance />
            <button onClick={() => {
                console.timeLog("button click callback called")
                mintToken();
            }}>
                Some button does something
            </button>
        </>
    )
}

export default Home2