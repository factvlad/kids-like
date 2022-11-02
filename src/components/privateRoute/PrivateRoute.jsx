import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const isLogin = useSelector(state => state.userInfo.isLogin)
    const isLoginAuth = useSelector(state => state.auth.isLogin)
    if (isLogin || isLoginAuth) {
        console.log(`est`);
        return <Outlet />
    }
    return <Navigate to="/authorization" />
}

export default PrivateRoute;