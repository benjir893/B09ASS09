

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <nav>
                <h6 className="footer-title text-orange-600">Services</h6>
                <a className="link link-hover text-orange-700">Branding</a>
                <a className="link link-hover text-orange-700">Design</a>
                <a className="link link-hover text-orange-700">Marketing</a>
                <a className="link link-hover text-orange-700">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title text-orange-600">Company</h6>
                <a className="link link-hover text-orange-700">About us</a>
                <a className="link link-hover text-orange-700">Contact</a>
                <a className="link link-hover text-orange-700">Jobs</a>
                <a className="link link-hover text-orange-700">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title text-orange-600">Legal</h6>
                <a className="link link-hover text-orange-700">Terms of use</a>
                <a className="link link-hover text-orange-700">Privacy policy</a>
                <a className="link link-hover text-orange-700">Cookie policy</a>
            </nav>
            <form>
                <h6 className="footer-title text-orange-600">Newsletter</h6>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-orange-700">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                        <button className="btn btn-outline border border-s border-orange-600 text-orange-600 hover:bg-orange-700 join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    );
};

export default Footer;