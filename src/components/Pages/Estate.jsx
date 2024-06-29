
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Estate = ({ houses }) => {
    const {id, estate_title, image, segment_name, description, Area, Status } = houses;
    return (
        <div>
            <div className="text-center items-center">
                <img className='w-2/3 h-full mx-auto pt-10 pb-10 ' src={image} alt="" />
            </div>
            <h1 className='text-orange-600 text-xl font-semibold text-center'> {estate_title}</h1>
            <h1 className='text-orange-600 text-lg font-semibold text-center'>Subdivision Name: {segment_name}</h1>
            <h1 className='text-orange-600 text-lg font-semibold text-center'>Lot Area : {Area}</h1>
            <h1 className='text-orange-600 text-lg font-semibold text-center'>Lot Status : {Status}</h1>
            <div className="w-2/3 mx-auto pb-3">
                {
                    description.length > 200 ? <p>{description.slice(0, 200)} <Link to={`/estatedetails/${id}`} className='text-orange-500 font-semibold'>Reade more...</Link></p> : <p>{description}</p>
                }
            </div>
            
        </div>
    );
};

Estate.propTypes = {
    houses: PropTypes.object
}
export default Estate;