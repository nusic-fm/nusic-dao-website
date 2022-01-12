import sample from "lodash/sample";

// Array of available nodes to connect to
export const nodes = [
  "https://rinkeby.infura.io/v3/8a96c8751a3a47e4a0c63ecaeef558d4",
];

const getNodeUrl = () => {
  return sample(nodes);
};

export default getNodeUrl;
