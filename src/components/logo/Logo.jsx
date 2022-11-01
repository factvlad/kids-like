import { ReactComponent as LogoIcon } from "../../shared/images/logo/logo.svg";
import css from './Logo.module.scss'
const Logo = () => {
    return (
        <div className={css.logo}>KidsLike <div><LogoIcon className={css.logo_icon} /></div></div>
    );
}

export default Logo;