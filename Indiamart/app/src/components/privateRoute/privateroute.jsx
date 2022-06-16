import { useSelector } from "react-redux";

export const PrivateRoute = ({children}) => {

    const token = useSelector((store) => store.cartReducer.token);
    if(!token)
    {
        return<Navigate to  = "/login"/>
    }

     return children
}