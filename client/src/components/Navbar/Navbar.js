import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar(){
    return (
        <nav className="navbar">
            <h1>
                <Link to="/">Critical Making Studio</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/producers">Producers</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;