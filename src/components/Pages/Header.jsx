import moment from 'moment';
import LeftAdd from './LeftAdd';
import RightAdd from './RightAdd';

const Header = () => {
    return (
        <div>
            <div className="grid md:grid-cols-4">
                <div className="">
                    <LeftAdd></LeftAdd>
                </div>
                <div className=" col-span-2 text-center w-full" >
                    <h1 className="font-bungee md:text-4xl ">SPACE FOR INDUSTRY</h1>
                    <h1 className="font-bungee md:text-2xl">Best Location For Industries</h1>
                    <h2 className="font-nabla md:text-xl border-b-2">{moment().format("dddd, MMMM D, YYYY")}</h2>
                </div>
                <div className="">
                    <RightAdd></RightAdd>
                </div>
            </div>
        </div>
    );
};

export default Header;