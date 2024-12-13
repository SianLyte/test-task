import React from 'react'
import cls from "./TicketListSkeleton.module.scss";

const TicketListSkeleton = () => {
  return (
    <>
      <div className={cls.skeletonCard}>
        <div className={cls.skeletonLine} style={{ width: '100%', height: "100%" }}></div>
      </div>
      <div className={cls.skeletonCard}>
        <div className={cls.skeletonLine} style={{ width: '100%', height: "100%" }}></div>
      </div>
      <div className={cls.skeletonCard}>
        <div className={cls.skeletonLine} style={{ width: '100%', height: "100%" }}></div>
      </div>
    </>

  )
}

export default TicketListSkeleton