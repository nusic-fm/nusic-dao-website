import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { useGovernanceContract } from "./useContract";

const useGovernance = () => {
  const [totalSupply, setTotalSupply] = useState(0);
  //TODO: Fix multiple contracts
  const governanceContract = useGovernanceContract(
    "0x0f626c776c653b55e6e988bae3821709683530f4"
  );
  const governanceContractReadOnly = useGovernanceContract(
    "0x0f626c776c653b55e6e988bae3821709683530f4",
    false
  );
  const { account } = useWeb3React();

  const fetchTotalSupply = async () => {
    const totalSupply = await governanceContractReadOnly.totalSupply();
    setTotalSupply(parseInt(totalSupply.toString()));
    console.log("Total supply of tokens: ", totalSupply.toString());

    // TODO
    governanceContractReadOnly.on("Transfer", async () => {
      console.log("Transfer event triggered.");
      const totalSupply = await governanceContractReadOnly.totalSupply();
      console.log("Latest total supply: ", totalSupply.toString());
      setTotalSupply(parseInt(totalSupply.toString()));
    });
  };

  const mintNFTs = async (noOfTokens: number) => {
    const tx = await governanceContract.mint(account, noOfTokens);
    return tx.wait();
  };

  useEffect(() => {
    if (governanceContractReadOnly) {
      fetchTotalSupply();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    totalSupply,
    mintNFTs,
  };
};

export default useGovernance;
