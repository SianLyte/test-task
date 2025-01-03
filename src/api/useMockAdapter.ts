import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { ticketsJson } from "./tickets/ticketsJson";
import { currencyJson } from "./currency/currencyJson";

const useMockAdapter = () => {
    const mock = new MockAdapter(axios, {delayResponse: 600});
    //currencies
    mock.onGet("/api/currencies").reply(200, currencyJson);
    // tickets
    mock.onGet("/api/tickets").reply(200, ticketsJson);
    

};

export default useMockAdapter;