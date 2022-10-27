import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Main = lazy(() => import('pages/main/MainPage'));
const Awards = lazy(() => import('pages/awards/AwardsPage'));
const Authorization = lazy(() => import('pages/authorization/AuthorizationPage'));
const Contacts = lazy(() => import('pages/contacts/ContactsPage'));
const Planning = lazy(() => import('pages/planning/PlanningPage'));

const UserRoutes = () => {
    return (
        <Suspense>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/authorization' element={<Authorization />} />
                <Route path='/awards' element={<Awards />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/planning' element={<Planning />} />
            </Routes>
        </Suspense>

    );
}

export default UserRoutes;