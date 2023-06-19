export interface NftDetails {
    artworkUrl: string;
    audioFileUrl: string;
    name: string;
    format: "audio" | "video" | undefined;
    tokenUri: string;
  }
  
  export interface SelectedNftDetails {
    address: string;
    artworkUrl: string;
    audioFileUrl: string;
    name: string;
    tokenId: string;
    format: "audio" | "video" | undefined;
    tokenUri: string;
  }
  export interface MoralisNftData {
    token_address: string;
    token_id: string;
    amount: string;
    contract_type: string;
    token_uri?: string | undefined;
    metadata?: string | undefined;
    name: string;
    symbol: string;
    normalized_metadata: { animation_url?: string; name?: string; image: string };
    artworkUrl: string | undefined;
  }
  