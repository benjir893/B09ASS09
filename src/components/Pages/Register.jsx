import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Apps/Authprovider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import app from "../Apps/firebase.config";
import { Helmet } from "react-helmet-async";

const db = getFirestore(app);

const Register = () => {

    const { user, createUser } = useContext(AuthContext);
    const [regerror, setRegerror] = useState('');
    const [showpass, setShowpass] = useState(false);
    const navigate = useNavigate();


    // const {createUser} = useContext(AuthContext);

    const handleRegistration = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const contact = form.get('contact');
        const email = form.get('email');
        const password = form.get('password');

        //reset regerror
        setRegerror('');

        if (password.length < 6) {
            setRegerror('password must be at least 6 digit and one uppercase one lowercase and numbers')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegerror('Upper case letter is missing')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegerror('lower case letter is missing')
            return;
        }
        else if (!/\d/.test(password)) {
            setRegerror('number is missing')
            return;
        }
        //create user in firebase
        createUser(email, password)
            .then(userCredentials => {
                console.log(userCredentials.user);
                if (user) {
                    setDoc(doc(db, 'users', user.uid), {
                        Email: user.email,
                        Name: name,
                        Contact: contact,
                    });
                }
                e.target.reset();
                navigate('/')

            }).catch(error => {
                console.error(error)
                setRegerror('The email already exists');
            })

    }

    return (
        <div className="hero min-h-screen bg-orange-50">
            <Helmet>
                spaceFor/Register
            </Helmet>
            <div className="space-y-3">
                <div className="">
                    <h1 className="text-5xl font-bold font-bungee">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegistration} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact</span>
                            </label>
                            <input type="text" placeholder="contact" name="contact" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            {
                                regerror && <p className="text-red-500 text-lg">{regerror}</p>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex items-center">
                                <input type={showpass ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required /><span className="-ml-5" onClick={() => setShowpass(!showpass)}>
                                    {
                                        showpass ? <FaRegEyeSlash /> : <FaRegEye />
                                    }</span>
                            </div>
                        </div>
                       
                        <div className="form-control mt-6">
                            <button className="btn btn-outline border border-s border-orange-500 text-xl text-orange-500 hover:bg-orange-700">Register</button>
                        </div>
                        <div className="p-3">
                            <p>Already registered? <Link className="text-orange-500" to={'/login'}>LOGIN</Link></p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;