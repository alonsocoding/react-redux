import { handleResponse, handleError } from "./apiUtils";
import axios from "axios";
const baseUrl = process.env.API_URL + "/authors/";

export function getAuthors() {
  return axios
    .get(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
