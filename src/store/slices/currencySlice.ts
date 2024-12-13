import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCurrenciesRequest } from "../../api/currency/getCurrenciesRequest";

export enum EnumCurrency {
  "USD" = "USD",
  "EUR" = "EUR",
  "RUB" = "RUB"
}

export enum EnumShortCurrency {
  "RUB" =  "₽",
  "USD" = "$",
  "EUR" = "€"
}

type Nullable<T> = T | null

export type Currency = Nullable<Record<EnumCurrency, number>>;



interface CurrencyState {
  currenciesPrices: Currency;
  currentCurrency: EnumCurrency;
  status: "idle" | "loading" | "failed"
}

const initialState: CurrencyState = {
  currenciesPrices: null,
  currentCurrency: EnumCurrency.RUB,
  status: "idle"
};

export const fetchCurrencies = createAsyncThunk('currency/fetchCurrencies', async () => {
  try {
    const response = await getCurrenciesRequest();
    return response;
  } catch (error) {
    throw new Error('Failed to fetch tickets');
  }
});

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeCurrency(state, action : PayloadAction<EnumCurrency>) {
      state.currentCurrency = action.payload;
    }
  },

  extraReducers: (builder) => 
    builder.addCase(fetchCurrencies.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchCurrencies.fulfilled, (state, action) => {
      state.currenciesPrices = action.payload;
      state.status = "idle"
    })
    .addCase(fetchCurrencies.rejected, (state) => {
      state.status = "failed";
    })
})

export const { changeCurrency } = currencySlice.actions;
export default currencySlice.reducer;



