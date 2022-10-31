import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserInfoOperation } from "redux/user-info/user-info-operations";

import Header from "./header/Header";
import UserRoutes from "./user-routes/UserRoutes";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfoOperation())
  }, [dispatch])
  return (
    <>
      <Header />
      <UserRoutes />
    </>
  );
};
