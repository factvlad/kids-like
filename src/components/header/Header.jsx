import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Logo from 'components/logo/Logo';
import css from './Header.module.scss';

import { logoutOperation } from '../../redux/auth/auth-operations';
const activeNav = ({ isActive }) => {
    return isActive ? `${css.header_nav_link} ${css.active}` : css.header_nav_link
}

const Header = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector(store => store.userInfo.isLogin)
    const balance = useSelector(store => store.userInfo.user?.user?.balance)

    return (
        <header>
            <div className="container">
                <div className={css.header_section}>
                    <Logo />
                    {isLogin && <p className={css.header_balance}><span className={css.header_balance_text}>Баланс <br />баллов:</span> {balance}</p>}
                    <div className={css.header_nav_box}>
                        <nav>
                            <NavLink className={activeNav} to="/authorization">Authorization</NavLink>
                            {isLogin && <>
                                <NavLink className={activeNav} to="/">Main</NavLink>
                                <NavLink className={activeNav} to="/awards">Awards</NavLink>
                                <NavLink className={activeNav} to="/planning">Planning</NavLink>
                            </>}
                            <NavLink className={activeNav} to="/contacts">Contacts</NavLink>
                        </nav>
                        {isLogin && <button className={css.header_btn} type="button" onClick={() => dispatch(logoutOperation())}>
                            LogOut
                        </button>}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
