import { RouteProps } from "react-router-dom"
import { MainPage } from "../../pages/MainPage/MainPageAsync"
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage"

const enum AppRoutes {
    MAIN = "main",
    NOT_FOUND = "not_found"
}

const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    //отработает если остальные не отработали. держим последним
    [AppRoutes.NOT_FOUND]: "/*"
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        element: <MainPage />,
        path: RoutePaths[AppRoutes.MAIN],
    },
    //not-found должен быть последний
    [AppRoutes.NOT_FOUND]: {
        element: <NotFoundPage />,
        path: RoutePaths[AppRoutes.NOT_FOUND],
    },

}