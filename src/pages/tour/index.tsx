import {useParams} from "react-router";

export const Tour = () => {
    const { id } = useParams();

    return <>Tour {id}</>
}