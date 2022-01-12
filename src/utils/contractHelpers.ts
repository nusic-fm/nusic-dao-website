import { ethers } from "ethers";

const GovernanceABI = [
  "function mint(address _to, uint256 _noOfTokens) public",
  "function totalSupply() public view returns(uint256)",
  "event Transfer(address indexed _from, address indexed, address indexed _to, uint256 indexed _tokenId)",
];

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
  return getContract(GovernanceABI, address, signer);
};
