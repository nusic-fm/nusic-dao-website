import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useGovernanceContract } from "./useContract";

const NFT_PRICE = process.env.REACT_APP_NFT_PRICE || "0.01";

const useGovernance = () => {
  const [totalSupply, setTotalSupply] = useState(0);
  //TODO: Fix multiple contracts
  const governanceContract = useGovernanceContract(
    process.env.REACT_APP_GOVERNANCE_TOKEN || ""
  );
  const governanceContractReadOnly = useGovernanceContract(
    process.env.REACT_APP_GOVERNANCE_TOKEN || "",
    false
  );

  const fetchTotalSupply = async () => {
    const totalSupply = await governanceContractReadOnly.totalSupply();
    setTotalSupply(parseInt(totalSupply.toString()));
    console.log("Total supply of tokens: ", totalSupply.toString());

    governanceContractReadOnly.on("Transfer", async () => {
      console.log("Transfer event triggered.");
      const totalSupply = await governanceContractReadOnly.totalSupply();
      console.log("Latest total supply: ", totalSupply.toString());
      setTotalSupply(parseInt(totalSupply.toString()));
    });
  };

  const mintNFTs = async (noOfTokens: number) => {
    const value = ethers.utils.parseEther(
      (parseFloat(NFT_PRICE) * noOfTokens).toString()
    );
    const tx = await governanceContract.stage1Mint(noOfTokens, {
      value,
    });
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
