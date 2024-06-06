import { lazy, ReactNode } from "react";
import { Navigation } from "./Navigation";
import Dashboard from "components/Dashboard";
import SocieteView from "modules/parametrage/ui/SocieteView";

const CategoryView  = lazy(() =>import("modules/parametrage/ui/CategoryView"));
const TiersView  = lazy(() =>import("modules/users/ui/TiersView"));
const Home  = lazy(() =>import("common/LandingPage/ui/Home"));
const Login  = lazy(() =>import("modules/users/ui/Login"));


interface routeI {
    referenceModule: number;
    path: string;
    component: React.ComponentType;
}

export const routes: routeI[] = [
    {
        referenceModule: 0,
        path: "/",
        component: localStorage.getItem("connectedToken")? Home : Home
    },
    {
        referenceModule: 0,
        path: "/login",
        component: localStorage.getItem("connectedToken")? Login : Login
    },
    {
    referenceModule: 0,
    path: Navigation.DASHBOARD,
    component: Dashboard
},
{
    referenceModule: 1,
    path: Navigation.TIERS,
    component: TiersView
},
{
    referenceModule: 3,
    path: Navigation.PARAMETRAGE_SOCIETE,
    component: SocieteView
},
{
    referenceModule: 3,
    path: Navigation.PARAMETRAGE_CATEGORY,
    component: CategoryView
},

]