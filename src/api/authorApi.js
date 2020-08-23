import { handleHttpResponse, handleHttpError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/authors/";

export function getAuthors() {
  return fetch(baseUrl).then(handleHttpResponse).catch(handleHttpError);
}
