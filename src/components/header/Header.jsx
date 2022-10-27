import { NavLink } from "react-router-dom";

const Header = () => {
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
                </div>
            </div>
        </header>
    );
}

export default Header;