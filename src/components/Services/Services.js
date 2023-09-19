import { Link } from 'react-router-dom';
import './Services.css';

function Services(){
    return(
        <div className="services">
            <h1>Services Offered</h1>
            <ul>
                <li>3D Printing</li>
                <li>Sewing</li>
                <li>Audio Both</li>
                <li>Button Making</li>
                <li>Sticker Printing</li>
                <li>iMacs with Adobe Creative Cloud</li>
            </ul>
        </div>
    );
}

export default Services;