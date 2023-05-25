import React from "react";
import {Header} from "../../entities/header";
import {Footer} from "../../entities/footer";
import {ParentProps} from "../../shared/types";

import './index.scss'

export const Layout: React.FC<ParentProps> = ({children}) => {
    return <div id='layout'>
        <Header/>
        {children}
        <Footer/>
    </div>
}