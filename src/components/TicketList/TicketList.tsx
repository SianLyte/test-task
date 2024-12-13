import { useEffect } from 'react';
import { TicketCard } from '../TicketCard/TicketCard';
import { fetchTickets } from '../../store/slices/ticketsSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import cls from "./TicketList.module.scss";
import TicketListSkeleton from './skeleton/TicketListSkeleton';

export function TicketList() {
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

  const renderTicketList = () => {
    if (ticketsStatus === 'loading' || currencyStatus === 'loading') {
      return <TicketListSkeleton />;
    }

    if (ticketsStatus === 'failed') {
      return <div className={cls.centerText}>Не получилось загрузить билеты. Попробуйте еще раз.</div>;
    }

    if (filteredTickets.length === 0) {
      return <div className={cls.centerText}>Билеты не найдены</div>;
    }

    return filteredTickets.map((ticket) => (
      <TicketCard key={ticket.id} ticket={ticket} />
    ));
  };

  return (
    <div className={cls.ticketList}>
      {renderTicketList()}
    </div>)
}