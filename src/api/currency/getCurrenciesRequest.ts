import { Currencies } from "./currency.type";

export const getCurrenciesRequest = async () => {
  const currencies:Currencies = {
    EUR: 0.008734,
    USD: 0.008969,
    RUB: 1
  };

  return currencies;

}