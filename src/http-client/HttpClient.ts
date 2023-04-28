import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL, LOCAL_STORAGE_KEYS } from "../utils/constants/constants";

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
  BadRequest = 400,
}

const headers: Readonly<Record<string, string | boolean>> = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

class HttpClient {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const http = axios.create({
      baseURL: BASE_URL,
      headers,
      withCredentials: true,
    });

    http.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const { response } = error;
        return this.handleError(response);
      }
    );

    this.instance = http;
    return http;
  }

  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }

  private async handleError(error: any) {
    if (!error) return;
    const {
      status,
      data: { code = "" },
    } = error;

    switch (status) {
      case StatusCode.InternalServerError: {
        break;
      }
      case StatusCode.Forbidden: {
        const originalRequest = error.config;
        if (!originalRequest._retry) {
          originalRequest._retry = true;
          if (code === "woocommerce_rest_invalid_nonce") {
            const { data } = await this.get(`${BASE_URL}/nonce/header`);
            if (this.instance) {
              originalRequest.headers["nonce"] = data[0];
              localStorage.setItem(LOCAL_STORAGE_KEYS.NONCE, data[0]);
              return this.instance?.request(originalRequest);
            }
          }
        }
        break;
      }

      case StatusCode.Unauthorized: {
        const originalRequest = error.config;
        if (!originalRequest._retry) {
          originalRequest._retry = true;
          if (code === "woocommerce_rest_missing_nonce") {
            const { data } = await this.get(`${BASE_URL}/nonce/header`);
            if (this.instance) {
              originalRequest.headers["nonce"] = data[0];
              localStorage.setItem(LOCAL_STORAGE_KEYS.NONCE, data[0]);
              return this.instance?.request(originalRequest);
            }
          }
        }
        break;
      }
      case StatusCode.TooManyRequests: {
        break;
      }
      default:
        break;
    }
    return Promise.reject(error);
  }
}

export const httpClient = new HttpClient();
