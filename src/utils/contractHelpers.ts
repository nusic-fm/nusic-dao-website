import { ethers } from "ethers";
import governance from "../abis/Nusic.json";

const getContract = (
  abi: any,
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  const signerOrProvider = signer;
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getGovernanceContract = (
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  return getContract(governance.abi, address, signer);
};
