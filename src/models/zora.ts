export interface IZoraData {
    metadata?: {
      name?: string | null;
      artist_name?: string | null;
      description?: string | null;
      external_url?: string | null;
      image?: string | null;
      audio_url?: string | null;
      animation_url?: string | null;
      comment_wall_url?: string | null;
      attributes?: {
        trait_type?: string | null;
        value?: string | null;
      }[];
    };
    // content?: {
    //   mediaEncoding?: {
    //     large?: string | null;
    //     original?: string | null;
    //   };
    //   mimeType?: string | null;
    //   url?: string | null;
    //   size?: string | null;
    // };
    tokenUrl?: string | null;
    // tokenContract?: {
    //   symbol?: string | null;
    //   totalSupply?: number;
    //   description?: null;
    //   chain?: number;
    //   collectionAddress?: string | null;
    //   name?: string | null;
    //   network?: string | null;
    // };
    collectionAddress: string;
    collectionName?: string | null;
    // description?: string | null;
    // networkInfo?: {
    //   chain?: string | null;
    //   network?: string | null;
    // };
    tokenStandard?: string | null;
    // mintInfo?: {
    //   toAddress?: string | null;
    //   originatorAddress?: string | null;
    //   mintContext?: {
    //     blockNumber?: number;
    //     transactionHash?: string | null;
    //     blockTimestamp?: string | null;
    //   };
    // };
    name?: string | null;
    // owner?: string | null;
    image?: {
      mediaEncoding?: {
        large?: string | null;
        poster?: string | null;
        original?: string | null;
        thumbnail?: string | null;
      };
      mimeType?: string | null;
      size?: string | null;
      url?: string | null;
    };
    tokenId: string;
    tokenUrlMimeType?: string | null;
  }
  