import {Logo} from "../../shared/ui/logo";
import {ToursLink} from "./toursLink/toursLink";

import './index.scss'

export const Header = () => {
    return <>
        <div id='header'>
            <Logo/>
            <ToursLink/>
        </div>
    </>
}