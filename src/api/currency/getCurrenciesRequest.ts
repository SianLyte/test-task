import FreeCurrencyApi from "./currency";
import { ICurrencyResponse } from "./currency.type";


export const getCurrenciesRequest = async () => {
  const freecurrencyapi = new FreeCurrencyApi(process.env.REACT_APP_FREE_CURRENCY_API_KEY);

  const currencies:ICurrencyResponse = await freecurrencyapi.latest({
    base_currency: "RUB",
    currencies: "USD,EUR"
  });

  currencies["RUB"] = 1;

  return currencies;

}