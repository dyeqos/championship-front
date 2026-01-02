import axios, { AxiosError, type AxiosResponse } from "axios";

import { toast } from "sonner";

import { apiUrl } from "../constants/GlobalConstant";
export const ApiConnection = axios.create({
  baseURL: apiUrl,
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});

ApiConnection.interceptors.response.use(
  <T>(response: AxiosResponse<T>): T => response.data,
  (error: AxiosError) => {
    if (error.response) {
      console.log(error);
      toast.warning("error");
    } else if (error.request) {
      toast.warning("No se puede conectar con el servidor");
    } else {
      toast.warning("Hubo un error, hable con el administrador");
    }
    return Promise.reject(error);
  }
);
