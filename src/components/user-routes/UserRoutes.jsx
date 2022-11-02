import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import PrivateRoute from "components/privateRoute/PrivateRoute";
import PublicRoute from "components/publicRoute/PublicRoute";

const Main = lazy(() => import('pages/main/MainPage'));
const Awards = lazy(() => import('pages/awards/AwardsPage'));
const Authorization = lazy(() => import('pages/authorization/AuthorizationPage'));
const Contacts = lazy(() => import('pages/contacts/ContactsPage'));
const Planning = lazy(() => import('pages/planning/PlanningPage'));

const UserRoutes = () => {
    return (
        <Suspense>
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route path='/authorization' element={<Authorization />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path='/' element={<Main />} />
                    <Route path='/awards' element={<Awards />} />
                    <Route path='/planning' element={<Planning />} />
                </Route>
                <Route path='/contacts' element={<Contacts />} />
            </Routes>
        </Suspense>

    );
}

export default UserRoutes;