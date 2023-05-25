import {AboutUsBlock} from "../../widgets/aboutUs";
import {Spaceship} from "../../widgets/spaceship";
import {History} from "../../widgets/history";
import {Crew} from "../../widgets/crew";
import {Reviews} from "../../widgets/reviews";
import {TakeTour} from "../../widgets/takeTour";
import {Layout} from "../../widgets/layout";
import {Intro} from "../../widgets/intro";

export const Home = () => {
    return <Layout>
        <Intro/>
        <AboutUsBlock/>
        <Spaceship/>
        <Crew/>
        <History/>
        <Reviews/>
        <TakeTour/>
    </Layout>
}