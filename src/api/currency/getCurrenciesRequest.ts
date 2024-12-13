import FreeCurrencyApi from "./currency";
import { ICurrencyResponse } from "./currency.type";

const apiKey = "fca_live_aUq9Qv54wX2q7cny3JsUd1Eai5YsPqiHl4KjNL1V";

export const getCurrenciesRequest = async () => {
  const freecurrencyapi = new FreeCurrencyApi(apiKey);

  const currencies:ICurrencyResponse = await freecurrencyapi.latest({
    base_currency: "RUB",
    currencies: "USD,EUR"
  });

  currencies["RUB"] = 1;

  return currencies;

}