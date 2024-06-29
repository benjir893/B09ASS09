import { useLoaderData } from "react-router-dom";


const Estate = ({houses}) => {
    const {estate_title} = houses;
    return (
        <div>
            <h1> {estate_title}</h1>
        </div>
    );
};

export default Estate;