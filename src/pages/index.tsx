import {Route, Routes} from "react-router-dom";
import {Home} from "./home";
import {Catalogue} from "./catalogue";
import {Tour} from "./tour";
import {PageNotFound} from "./pageNotFound";

// const Home = lazy(() => import("./home"));
// const Catalogue = lazy(() => import("./catalogue"));
// const Tour = lazy(() => import("./tour"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catalogue" element={<Catalogue/>}/>
            <Route path="/tours/:id" element={<Tour/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    );
};