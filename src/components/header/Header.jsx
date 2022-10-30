import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutOperation } from '../../redux/auth/auth-operations'

const Header = () => {
    const dispatch = useDispatch()
    return (
        <header>
            <div className='container'>
                <div>
                    <p>KidsLike</p>
                    <nav>
                        <NavLink to='/'>Main</NavLink>
                        <NavLink to='/authorization'>Authorization</NavLink>
                        <NavLink to='/awards'>Awards</NavLink>
                        <NavLink to='/contacts'>Contacts</NavLink>
                        <NavLink to='/planning'>Planning</NavLink>
                    </nav>
                    <button type="button" onClick={() => dispatch(logoutOperation())}>LogOut</button>
                </div>
            </div>
        </header>
    );
}

export default Header;