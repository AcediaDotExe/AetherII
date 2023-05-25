import {Logo} from "../../shared/ui/logo";
import {OurToursLink} from "./ourToursLink/ourToursLink";

import './index.scss'

export const Header = () => {
    return <>
        <div id='header'>
            <Logo/>
            <OurToursLink/>
        </div>
    </>
}