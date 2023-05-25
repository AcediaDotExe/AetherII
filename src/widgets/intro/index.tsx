import './index.scss'
import {RocketGif} from "../../shared/ui/gif";
import {IntroText} from "../../entities/introText";

export const Intro = () => {
    return <>
        <div id='intro'>
        <IntroText />
        <RocketGif/>
    </div>
        <div id='blank-space'/>
    </>


}