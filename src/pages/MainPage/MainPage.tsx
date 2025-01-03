import React from 'react'
import { CurrencySelector } from '../../components/CurrencySelector/CurrencySelector'
import { CheckboxFilter } from '../../components/CheckboxFilter/CheckboxFilter'
import TicketList from '../../components/TicketList/TicketList'
import cls from "./MainPage.module.scss";

const Main = () => {
  return (
    <>
      <div className={cls.panel}>
        <CurrencySelector />
        <CheckboxFilter />
      </div>
      <TicketList />
    </>
  )
}

export default Main