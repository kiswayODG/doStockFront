import { lazy, ReactNode } from "react";
import { Navigation } from "./Navigation";
const Dashboard = lazy(() => import("components/TableauDeBord"));
const SocieteView = lazy(() => import("modules/parametrage/ui/SocieteView"));
const AddBusinessIcon = lazy(() => import("@mui/icons-material/AddBusiness"));
const DashboardIcon = lazy(() => import("@mui/icons-material/Dashboard"));
const PeopleIcon = lazy(() => import("@mui/icons-material/People"));
const ShoppingCartIcon = lazy(() => import("@mui/icons-material/ShoppingCart"));
const CategoryView = lazy(() => import("modules/parametrage/ui/CategoryView"));
const TiersView = lazy(() => import("modules/tiers/ui/TiersView"));
const CommandeReadView = lazy(() => import("modules/commandes/ui/CommandeReadView"));
const MagasinView = lazy(() => import("@modules/parametrage/ui/MagasinView"));

const Home = lazy(() => import("common/LandingPage/ui/Home"));
const Login = lazy(() => import("@modules/users/ui/Login"));
const RegisterUser = lazy(()=> import ("@modules/users/ui/AddUpdateUser"));
const SettingsApplicationsIcon = lazy(() => import("@mui/icons-material/SettingsApplications"));
const ApartmentIcon = lazy(() => import("@mui/icons-material/Apartment"));



interface routeI {
    referenceModule: number;
    path: string;
    component: React.ComponentType;
}

export const routes: routeI[] = [
    {
        referenceModule: 0,
        path: "/",
        component: localStorage.getItem("connectedToken") ? Home : Home
    },
    {
        referenceModule: 0,
        path: "/login",
        component: localStorage.getItem("connectedToken") ? Login : Login
    },
    {
        referenceModule: 0,
        path: "/new-user",
        component: RegisterUser,
    },
    {
        referenceModule: 0,
        path: Navigation.DASHBOARD,
        component: Dashboard,

    },
    {
        referenceModule: 1,
        path: Navigation.TIERS,
        component: TiersView,
    },
    {
        referenceModule: 1,
        path: Navigation.COMMANDES,
        component: CommandeReadView,
    },
    {
        referenceModule: 1,
        path: Navigation.MAGASINS,
        component: MagasinView,
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

interface module {
    referenceModule: number,
    path: string,
    icon: any,
    titre: string
}

export const modules: module[] = [
    {
        referenceModule: 1,
        path: Navigation.DASHBOARD,
        icon: DashboardIcon,
        titre: "Tableau de bord"
    },
    {
        referenceModule: 2,
        path: Navigation.TIERS,
        titre: "Client/Fournisseur",
        icon: PeopleIcon
    },
    {
        referenceModule: 3,
        path: Navigation.COMMANDES,
        titre: "Commandes",
        icon: ShoppingCartIcon
    },
    {
        referenceModule: 4,
        path: Navigation.MAGASINS,
        titre: "Magasins",
        icon: AddBusinessIcon
    }
]

export const parametrages: module[] = [
    {
        referenceModule: 1,
        path: Navigation.PARAMETRAGE_SOCIETE,
        icon: ApartmentIcon,
        titre: "Société/Etablissement"
    },
    {
        referenceModule: 2,
        path: Navigation.PARAMETRAGE_CATEGORY,
        titre: "Categories",
        icon: SettingsApplicationsIcon
    },
    {
        referenceModule: 2,
        path: Navigation.UNDIFINED,
        titre: "Param1",
        icon: SettingsApplicationsIcon
    },
]