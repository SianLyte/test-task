import { Link } from "react-router-dom"
import { RouteConfig } from "../router/config"

const ErrorPage = () => {
  return (
    <>
      <div>Произошла непредвиденная ошибка</div>
      <Link to={{pathname: RouteConfig.main.path}}>Вернуться на главную</Link>
    </>
  )
}

export default ErrorPage