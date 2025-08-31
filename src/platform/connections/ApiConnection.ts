import axios from "axios";
import { apiUrl } from "../constants/GlobalConstant";
export const ApiConnection = axios.create({
  baseURL: apiUrl,
});
