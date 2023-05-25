import './index.scss'
import {Link} from "react-router-dom";

export const Logo = () => {
    return <div id='logo-wrapper'>
        <Link id='logo' to='/'>Aether II</Link>
    </div>
}