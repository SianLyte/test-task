import axios from "axios";
import { Ticket } from "./ticket.type";


async function getTicketsRequest() {
    const {data} = await axios.get<Ticket[]>("/api/tickets");
    return data;

}

export default getTicketsRequest;