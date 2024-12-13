import { Ticket } from '../../api/tickets/ticket.type';
import cls from "./TicketCard.module.scss"
import { format, parseISO } from 'date-fns';
import {ru} from "date-fns/locale";
import { ReactComponent as Plane } from "../../images/airplane.svg";
import Logo from "../../images/logo.png";
 
import { GetTransferDeclination } from '../../helpers/transferDeclination';
import { useDisplayedPrice } from './useDisplayedPrice';

interface TicketProps {
  ticket: Ticket
} 

export function TicketCard({ ticket }: TicketProps) {

  const DisplayedCurrencyPrice = useDisplayedPrice(ticket);

  return (
    <div className={cls.ticketCardContainer}>
      <div className={cls.LogoButtonContainer}>
        <img className={cls.logo} src={Logo} alt="Turkish Airlines" />
        <button className={cls.btn}>
          Купить<br/> за {DisplayedCurrencyPrice}
        </button>
      </div>
      <div className={cls.MainInfoContainer}>
        <div className={cls.TimeContainer}>
          <div className={cls.time}>
            {format(parseISO(ticket.departureTime), "HH:mm")}
          </div>
          <div className={cls.transferContainer}>
            <p className={cls.transfer}>
              {GetTransferDeclination(ticket.transfers).toUpperCase()}
            </p>
            <div className={cls.stickContainer}>
              <div className={cls.stick}></div>
              <Plane className={cls.plane}/></div>
          </div>
          <div className={cls.time}>
            {format(parseISO(ticket.arrivalTime), "HH:mm")}
          </div>
        </div>
        <div className={cls.CityDateContainer}>
          <div>
            <div>{ticket.departureAirportCode}, {ticket.departureCity}</div>
            <div className={cls.date}>
              {format(parseISO(ticket.departureTime), "d MMM yyyy, EEEEEE", { locale: ru })}
            </div>
          </div>
          <div>
            <div>{ticket.arrivalCity}, {ticket.arrivalAirportCode}</div>
            <div className={cls.date}>
              {format(parseISO(ticket.arrivalTime), "d MMM yyyy, EEEEEE", { locale: ru })}
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}