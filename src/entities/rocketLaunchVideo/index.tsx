import './index.scss'

export const LaunchVideo = () => {
    return <video id="launch-video"  preload="true" autoPlay loop muted>
            <source src="/public/video/rocket-launch-v2.mp4"
                    type="video/mp4"/>
    </video>
}