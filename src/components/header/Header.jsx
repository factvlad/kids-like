import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Logo from 'components/logo/Logo';
import css from './Header.module.scss';

import { logoutOperation } from '../../redux/auth/auth-operations';

const Header = () => {
    const dispatch = useDispatch();
    return (
        <header>
            <div className="container">
                <div className={css.header_section}>
                    <Logo />
                    <div className={css.header_nav_box}>
                        <nav>
                            <NavLink to="/">Main</NavLink>
                            <NavLink to="/authorization">Authorization</NavLink>
                            <NavLink to="/awards">Awards</NavLink>
                            <NavLink to="/contacts">Contacts</NavLink>
                            <NavLink to="/planning">Planning</NavLink>
                        </nav>
                        <button type="button" onClick={() => dispatch(logoutOperation())}>
                            LogOut
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
