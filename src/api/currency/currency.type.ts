export interface ICurrencyResponse {
  EUR: number;
  USD: number;
  RUB: number;
}

export interface IFreeCurrency {
  baseUrl: string;
  headers: { apikey: string };

  /**
   * Make a call to the API with a specific endpoint and query parameters.
   * @param endpoint - The API endpoint to call.
   * @param params - Query parameters as key-value pairs.
   * @returns A Promise resolving to the response data.
   */
  call(endpoint: string, params?: Record<string, string | number>): Promise<any>;

  /**
   * Retrieve the status of the API.
   * @returns A Promise resolving to the API status.
   */
  status(): Promise<any>;

  /**
   * Get a list of available currencies.
   * @param params - Optional query parameters.
   * @returns A Promise resolving to the list of currencies.
   */
  currencies(params?: Record<string, string | number>): Promise<any>;

  /**
   * Get the latest exchange rates.
   * @param params - Query parameters such as base currency.
   * @returns A Promise resolving to the latest exchange rates.
   */
  latest(params?: Record<string, string | number>): Promise<any>;

  /**
   * Get historical exchange rates.
   * @param params - Query parameters such as date range.
   * @returns A Promise resolving to the historical exchange rates.
   */
  historical(params?: Record<string, string | number>): Promise<any>;
}