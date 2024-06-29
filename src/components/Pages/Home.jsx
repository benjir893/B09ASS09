import { useLoaderData } from "react-router-dom";
import Estate from "./Estate";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const houses = useLoaderData();
    console.log(houses)
    return (
        <div className="">
            <div className="">
                <Helmet>
                    <title>spaceFor/Home</title>
                </Helmet>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img
                            src="https://i.ibb.co/zh46txL/house1.jpg"
                            className="w-full max-h-96" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img
                            src="https://i.ibb.co/mcPwmM6/house3.jpg"
                            className="w-full max-h-96" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img
                            src="https://i.ibb.co/2W8K7g5/house4.jpg"
                            className="w-full max-h-96" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img
                            src="https://i.ibb.co/LJJcwNZ/house2.jpg"
                            className="w-full max-h-96" />
                    </div>
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
            <div className="">
                {houses.map(house => <Estate key={house.id} houses={house}></Estate>)}
            </div>
        </div>
    );
};

export default Home;