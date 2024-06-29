import { Link, useParams } from "react-router-dom";
import estatesdata from '../../../public/estates.json'

const EstateDetails = () => {
    const { id } = useParams();
    const house = estatesdata.find(house => house.id == id);

    return (
        <div className="card card-compact bg-base-100 w-full shadow-xl">
            <figure>
                <img
                    src={house.image}
                    alt={house.id} />
            </figure>
            <div className="card-body">
                <h2 className="card-title md:ml-24">{house.estate_title}</h2>
                <p className="md:ml-24 mr-24 justify-end">{house.description}</p>
                <h2 className="card-title md:ml-24">Sub-Division Name: {house.segment_name}</h2>
                <h2 className="card-title md:ml-24">Price: {house.price}</h2>
                <h2 className="card-title md:ml-24">Status: {house.Status}</h2>
                <h2 className="card-title md:ml-24">Area: {house.Area}</h2>
                <h2 className="card-title md:ml-24">Location: {house.location}</h2>
                <h2 className="card-title md:ml-24">Facilities: {house.facilities}</h2>

                <div className="card-actions justify-end">
                    <Link to={-1}><button className="btn btn-ghost">Back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;