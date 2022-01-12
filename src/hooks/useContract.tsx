import { useMemo } from "react";
import useWeb3Provider from "../hooks/useWeb3Provider";
import { getGovernanceContract } from "../utils/contractHelpers";

export const useGovernanceContract = (
  address: string,
  isSigner: boolean = true
) => {
  const provider = useWeb3Provider();
  return useMemo(
    () =>
      getGovernanceContract(
        address,
        isSigner ? provider.getSigner() : provider
      ),
    [address, provider, isSigner]
  );
};
