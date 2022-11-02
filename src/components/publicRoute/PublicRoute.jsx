import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
    const isLogin = useSelector(state => state.userInfo.isLogin)
    if (!isLogin) {
        return <Outlet />
    }
    return <Navigate to="/" />
}

export default PublicRoute;