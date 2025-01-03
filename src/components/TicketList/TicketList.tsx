import { useEffect } from 'react';
import { TicketCard } from '../TicketCard/TicketCard';
import { fetchTickets } from '../../store/slices/ticketsSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import cls from "./TicketList.module.scss";
import TicketListSkeleton from './skeleton/TicketListSkeleton';

const TicketList = () => {
  const dispatch = useAppDispatch();
  const { tickets, filters, status: ticketsStatus, showAll } = useAppSelector((state) => state.tickets);
  const currencyStatus = useAppSelector(state => state.currency.status);

  useEffect(() => {
    dispatch(fetchTickets());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const filteredTickets = showAll ? tickets : tickets.filter((ticket) =>
    filters.includes(ticket.transfers)
  );

  let content;

  if (ticketsStatus === 'loading' || currencyStatus === 'loading') {
    content = <TicketListSkeleton />;
  } else if (ticketsStatus === 'failed') {
    content = <div className={cls.centerText}>Не получилось загрузить билеты. Попробуйте еще раз.</div>;
  } else if (filteredTickets.length === 0) {
    content = <div className={cls.centerText}>Билеты не найдены</div>;
  } else {
    content = filteredTickets.map((ticket) => (
      <TicketCard key={ticket.id} ticket={ticket} />
    ));
  }

  return <div className={cls.ticketList}>{content}</div>;
}

export default TicketList;