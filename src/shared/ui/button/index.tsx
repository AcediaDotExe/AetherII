import {FC} from "react";
import {ParentProps} from "../../types";
import './index.scss'

export const OurButton: FC<ParentProps> = ({children}) => {
    return <button id='our-button'>
        {children}
    </button>
}