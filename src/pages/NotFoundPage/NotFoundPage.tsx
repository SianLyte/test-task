import React from 'react'
import { Link } from 'react-router-dom'
import { RouteConfig } from '../../providers/router/config'

const NotFoundPage = () => {
  return (
    <div>NotFoundPage
            <Link to={{pathname: RouteConfig.main.path}}>Вернуться на главную</Link>
    </div>
  )
}

export default NotFoundPage