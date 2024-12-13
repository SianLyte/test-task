import { Ticket } from "../../api/tickets/ticket.type";
import { EnumCurrency, EnumShortCurrency } from "../../store/slices/currencySlice";
import { useAppSelector } from "../../store/store";

export const useDisplayedPrice = (ticket : Ticket) => {
  const {currenciesPrices, currentCurrency } = useAppSelector((state) => state.currency);

  const DisplayedCurrency = currenciesPrices 
  ? currentCurrency
  : ticket.currency as EnumCurrency;

  const DisplayedPrice = currenciesPrices 
    ? +(ticket.price * currenciesPrices[currentCurrency]).toFixed(1)
    : +ticket.price.toFixed(1);

  const DisplayedCurrencyPrice = 
    `${DisplayedPrice.toLocaleString("ru-RU")} ${EnumShortCurrency[DisplayedCurrency]}`;

  return DisplayedCurrencyPrice
}