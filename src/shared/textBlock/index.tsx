import {FC} from "react";
import {ParentProps} from "../types";
import './index.scss'

export const TextBlock: FC<ParentProps> = ({children}) => {
    return <div id='text-block'>
        <span id='text-block-modifier'>
            {children}
        </span>
    </div>
}