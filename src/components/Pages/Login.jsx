import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Apps/Authprovider";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const Login = () => {
    const { logInUser, loginWithGoogle } = useContext(AuthContext)
    const [showpass, setShowpass] = useState(false)
    const [loginerror, setLoginerror] = useState('')
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        //reset login error
        setLoginerror('');

        logInUser(email, password)
            .then(userCredential => {
                console.log(userCredential.user)
                e.target.reset();
                navigate('/')
            }).catch(error => {
                console.error(error);
                setLoginerror('please check your info again');
            })

    }
    const handleGoogleLogin =()=>{
        loginWithGoogle()
        .then(userCredential =>{
            console.log(userCredential.user);
            navigate('/')
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className="hero min-h-screen bg-orange-50">
            <Helmet>
                <title>spaceFor/Login</title>
            </Helmet>
            <div className="space-y-3">
                <div className="">
                    <h1 className="text-5xl font-bold font-bungee">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex items-center">
                                <input type={showpass ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
                                <span className="-ml-5" onClick={() => setShowpass(!showpass)}>
                                    {
                                        showpass ? <FaEyeSlash /> : <FaRegEye />
                                    }
                                </span>
                            </div>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline border border-s border-orange-500 text-xl text-orange-500 hover:bg-orange-700">Login</button>
                        </div>
                        <div className="">
                            {
                                loginerror && <p className="text-red-500 text-lg">{loginerror}</p>
                            }
                        </div>
                    </form>
                    <div className="p-2">
                        <p>Yet to <Link to={'/register'}><span className="text-orange-500">Register</span></Link>?</p>
                        <p className="text-blue-500">or signin with <button className="text-orange-500" onClick={handleGoogleLogin}>Google</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;