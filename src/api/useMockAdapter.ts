import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { ticketsJson } from "./tickets/ticketsJson";

const useMockAdapter = () => {
    const mock = new MockAdapter(axios, {delayResponse: 600});
    // tickets
    mock.onGet("/api/tickets").reply(200, ticketsJson);

};

export default useMockAdapter;