import axios from "axios";
import { IZoraData } from "../models/zora";
import { musicTokensInWalletQuery, tokensInWalletQuery } from "./queries";

export const getMusicNftsMetadataByWallet = async (owner: string) => {
  // const response = await this.zoraClient.tokens({
  //   where: { tokens: filter },
  //   // filter: { mediaType: MediaType.Audio },
  // });
  const endpoint = "https://api.zora.co/graphql";
  const headers = {
    "content-type": "application/json",
  };
  const tokensMetadata: {
    token: IZoraData;
    // marketsSummary: any;
    // sales: any;
  }[] = [];
  let retries = 0;
  let hasNextPage = false;
  let endCursor: string | null = null;
  do {
    try {
      const graphqlQuery: any = {
        // operationName: "fetchTokens",
        query: musicTokensInWalletQuery,
        variables: {
          owner,
          endCursor,
        },
      };
      console.log("Trying: ", endCursor);
      const response = await axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphqlQuery,
      });
      const nodes = response.data.data?.tokens.nodes;
      if (nodes?.length) {
        tokensMetadata.push(...nodes);
      } else {
        break;
      }
      retries = 0;
      hasNextPage = response.data.data?.tokens.pageInfo.hasNextPage;
      endCursor = response.data.data?.tokens.pageInfo.endCursor;
    } catch (e: any) {
      console.log(e.message);
      console.log("Error at: ", endCursor);
      if (retries === 20) {
        hasNextPage = false;
      } else {
        retries += 1;
        hasNextPage = true;
        await new Promise((res) =>
          setTimeout(() => {
            res("");
          }, 15000)
        );
      }
    }
  } while (hasNextPage);

  return tokensMetadata.map((tm) => tm.token);
};

export const getNftsMetadataByWallet = async (owner: string) => {
  // const response = await this.zoraClient.tokens({
  //   where: { tokens: filter },
  //   // filter: { mediaType: MediaType.Audio },
  // });
  const endpoint = "https://api.zora.co/graphql";
  const headers = {
    "content-type": "application/json",
  };
  const tokensMetadata: {
    token: IZoraData;
    // marketsSummary: any;
    // sales: any;
  }[] = [];
  let retries = 0;
  let hasNextPage = false;
  let endCursor: string | null = null;
  do {
    try {
      const graphqlQuery: any = {
        // operationName: "fetchTokens",
        query: tokensInWalletQuery,
        variables: {
          owner,
          endCursor,
        },
      };
      console.log("Trying: ", endCursor);
      const response = await axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: graphqlQuery,
      });
      const nodes = response.data.data?.tokens.nodes;
      if (nodes?.length) {
        tokensMetadata.push(...nodes);
      } else {
        break;
      }
      retries = 0;
      hasNextPage = response.data.data?.tokens.pageInfo.hasNextPage;
      endCursor = response.data.data?.tokens.pageInfo.endCursor;
    } catch (e: any) {
      console.log(e.message);
      console.log("Error at: ", endCursor);
      if (retries === 20) {
        hasNextPage = false;
      } else {
        retries += 1;
        hasNextPage = true;
        await new Promise((res) =>
          setTimeout(() => {
            res("");
          }, 15000)
        );
      }
    }
  } while (hasNextPage);

  return tokensMetadata.map((tm) => tm.token);
};
