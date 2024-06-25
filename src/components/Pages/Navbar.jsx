import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Apps/Authprovider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('user logged out');
            }).catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="grid md:grid-cols-5 bg-orange-50 my-2">
                <div className="navbar-start col-span-1 w-full text-center">
                    <h1 className="font-montserrat text-2xl font-semibold text-orange-600  bg-gradient-to-t  p-1">SPACEFOR</h1>
                </div>
                <div className="md: flex navbar-center col-span-3 space-x-5 font-prata text-orange-600 items-center mx-auto">
                    {
                        user && <>
                            <NavLink to={'/'}>HOME</NavLink>
                            <NavLink to={'/updates'}>UPDATES</NavLink>
                            <NavLink to={'/profile'}>PROFILE</NavLink>
                        </>
                    }
                    {
                        !user && <>
                        <NavLink to={'/'}>HOME</NavLink>
                        <NavLink to={'/register'}>REGISTER</NavLink>
                        </>
                    }
                </div>
                <div className="navbar-end flex items-center gap-2">
                    {user ? <>
                        <p>{user.email}</p>
                        <img className="w-10 rounded-full" src="https://i.ibb.co/jVBwgxS/profile-pic.jpg" alt="" />
                        <Link to={'/login'}><button onClick={handleLogOut} className="btn btn-outline border border-s border-orange-600 text-orange-500 hover:bg-orange-700 ">Log out</button></Link>
                    </> : <Link to={'/login'}><button className="btn btn-outline border border-s border-orange-600 text-orange-500 hover:bg-orange-700 ">LogIn</button></Link>
                    }



                </div>
            </div>
        </div>
    );
};

export default Navbar;