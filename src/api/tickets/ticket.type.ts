export type Ticket = {
  "id": number,
  "departureCity": string,
  "departureCountry": string,
  "departureAirportCode": string,
  "departureCityGMT": number,
  "arrivalCity": string,
  "arrivalCountry": string,
  "arrivalAirportCode": string,
  "arrivalCityGMT": number,
  "departureTime": string,
  "arrivalTime": string,
  "transfers": number,
  "price": number,
  "currency": string,
  "company": string
}