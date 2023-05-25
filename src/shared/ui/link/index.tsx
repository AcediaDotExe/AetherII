import {FC} from "react";
import {Link} from "react-router-dom";
import {ParentProps} from "../../types";
import './index.scss'

type LinkType = ParentProps & {path: string}

export const OurLink: FC<LinkType> = ({children, path}) => {
    return <Link to={path} id='our-link'>
        {children}
    </Link>
}