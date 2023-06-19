export const createUrlFromCid = (tokenUri: string) => {
    if (tokenUri.includes("https")) {
      return tokenUri;
    } else if (tokenUri.startsWith("ipfs")) {
      const cid = tokenUri.split("ipfs://")[1];
      return `https://ipfs.io/ipfs/${cid}`;
    } else if (tokenUri.startsWith("ar")) {
      const addressWithTokenId = tokenUri.split("ar://")[1];
      return `https://arweave.net/${addressWithTokenId}`;
    }
  };