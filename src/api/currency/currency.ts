import { IFreeCurrency } from "./currency.type";

class FreeCurrencyApi implements IFreeCurrency {
    baseUrl = 'https://api.freecurrencyapi.com/v1/';
    headers = {apikey: ""};
    
    constructor(apiKey = '') {
        this.headers = {
            apikey: apiKey
        };
    }

    async call(endpoint:string, params = {}) {
        const paramString = new URLSearchParams({
            ...params
        }).toString();
        try {
            const res = await fetch(`${this.baseUrl}${endpoint}?apikey=${this.headers.apikey}&${paramString}`)
            .then(b => b.json())
            .then(v => v.data);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    status () {
        return this.call('status');
    }

    currencies (params : Record<string, string | number>) {
        return this.call('currencies', params);
    }

    latest (params : Record<string, string | number>) {
        
        return this.call('latest', params);
    }

    historical (params : Record<string, string | number>) {
        return this.call('historical', params);
    }

}

export default FreeCurrencyApi;