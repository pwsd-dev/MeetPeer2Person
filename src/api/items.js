import makeRequest from "./helpers/makeRequest";

export function fetchAllItems(url) {
  return makeRequest(url);
}
