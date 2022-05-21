import axios from 'axios'
import type { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'

interface RefreshToken {
  status: number
  data: {
    authToken: string
  }
}

export abstract class HttpClientService {
  protected instance: AxiosInstance
  // protected readonly baseURL: string;

  public constructor() {
    // this.baseURL = baseURL;
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    })

    this.initializeRequestInterceptor()
    this.initializeResponseInterceptor()
  }

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest)
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use((response) => {
      if (response.headers && response.headers.authorization) {
        const responseToken = (response.headers.authorization as string).split(
          ' '
        )[1]
        // this.token = responseToken;

        sessionStorage.setItem('authToken', responseToken)
      }
      return response
    }, this.handleError)
  }

  private handleRequest = (config: AxiosRequestConfig) => {
    config.headers['Authorization'] = `Bearer ${sessionStorage.getItem(
      'authToken'
    )}`
    return config
  }

  private handleError = async (error: AxiosError) => {
    const originalRequest = error.config
    if (error.response?.status === 401) {
      const refreshToken = await this.refreshToken()
      if (refreshToken.status === 200) {
        // this.token = refreshToken.data.authToken;
        sessionStorage.setItem('authToken', refreshToken.data.authToken)
        return this.instance(originalRequest)
      }
    }
  }

  private async refreshToken(): Promise<RefreshToken> {
    const refreshTokenRequest = {
      authToken: sessionStorage.getItem('authToken'),
    }

    const { data } = await this.addRequestOptionsForClientSecrect()
    const options: AxiosRequestConfig = {
      headers: {
        CLIENT_KEY: data.clientKey,
      },
    }

    return axios.post(`/User/RenewToken`, refreshTokenRequest, options)
  }

  private addRequestOptionsForClientSecrect() {
    return axios.get(`/Utility/GetSecrets`)
  }
}
