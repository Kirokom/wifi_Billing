import {createBrowserRouter} from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Dashboard from "../pages/Dashboard"
import ClientMonitoringPage from "../pages/ClientMonitoringPage"
import AddCustomer from "../components/AddCustomer"
import NotFound from "../pages/NotFound"
import CustomerBilling from "../pages/CustomerBilling"


export const Router = createBrowserRouter([
    { 
        path :'/' ,
        element : <MainLayout/>,
        errorElement : <NotFound/>,
        children : [
            {index : true , element: <Dashboard/> },
            {path:"/CustomerBilling" , element:<CustomerBilling/>}
        ]
    }
])