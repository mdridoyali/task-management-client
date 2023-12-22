import linkedin from "../../assets/linkedin.png"
import fb from "../../assets/fb.png"
import email from "../../assets/email.png"
import github from "../../assets/github.png"
import { FaMailBulk } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer items-center p-7 bg-neutral text-neutral-content">
                <aside className="items-center grid-flow-col">
                    <h1 className="text-4xl  font-semibold">Task<span className="text-amber-500" >Manage</span></h1>
                    <div>
                        <p>Copyright © 2023 - All right reserved</p>
                        <div className="flex items-center gap-2"> <FaMailBulk /><p>mdridoyislamr@gmail.com</p></div>
                    </div>
                </aside>
                <nav className="grid-flow-col gap-3 md:place-self-center md:justify-self-end">
                    <div className="text-lg mt-1 flex items-center gap-1" ><p>Follow Us On</p><FaLongArrowAltRight /></div>
                    <a href="https://www.linkedin.com/in/md-ridoy-islam-7a3b39280/" ><img className="w-8 h-8  rounded-lg" src={linkedin} /></a>
                    <a href="https://www.facebook.com/mdridoy.raj.355" ><img className="w-8 h-8 rounded-lg" src={fb} /></a>
                    <a href="mailto:mdridoyislamr@gmail.com" ><img className="w-8 h-8 rounded-lg" src={github} /></a>
                    <a href="https://github.com/mdridoyali" ><img className="w-8 h-8 rounded-lg" src={email} /></a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;