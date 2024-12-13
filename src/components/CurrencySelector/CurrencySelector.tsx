import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { changeCurrency, EnumCurrency, fetchCurrencies } from '../../store/slices/currencySlice';
import { toast } from 'react-toastify';
import cls from "./CurrencySelector.module.scss";

export const CurrencySelector = () => {
  const {currentCurrency, status} = useAppSelector((state) => state.currency);
  const dispatch = useAppDispatch();

  const currencies:EnumCurrency[] = [
    EnumCurrency.USD,
    EnumCurrency.EUR, 
    EnumCurrency.RUB
  ];

  useEffect(() => {
    dispatch(fetchCurrencies());
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (status === 'failed') {
    toast("Couldn't load the currency", {type: "error"})
  };

  return (
    <div className={cls.container}>
      <div className={cls.header}>ВАЛЮТА</div>
      <div>
         {currencies.map((currency) => (
        <label key={currency} className={cls.label}>
          <input
            type="radio"
            name="currency"
            value={currency}
            checked={currentCurrency === currency}
            onChange={() => dispatch(changeCurrency(currency))}
            className={cls.radio}
          />
          <span className={cls.button}>{currency}</span>
        </label>
      ))}
      </div>
    </div>
  );
}