import { Link } from 'react-router-dom';
import './Services.css';

function Services(){
    return(
        <div className="services">
            <h1>Services</h1>
            <div className="service-grid">
                {/* 3D Printing */}
                <Link to="/services/3d-printing">
                    <div className="service-box">
                        <p>3D printing</p>
                    </div>
                </Link>
                {/* Sewing */}
                <Link to="/services/sewing">
                    <div className="service-box">
                        <p>Sewing</p>
                    </div>
                </Link>
                {/* Audio Booth */}
                <Link to="/services/audio-booth">
                    <div className="service-box">
                        <p>Audio Booth</p>
                    </div>
                </Link>
                {/* Button Making */}
                <Link to="/services/button-making">
                    <div className="service-box">
                        <p>Button Making</p>
                    </div>
                </Link>
                {/* Sticker Printing */}
                <Link to="/services/sticker-printing">
                    <div className="service-box">
                        <p>Sticker Printing</p>
                    </div>
                </Link>
                {/* iMacs with Adobe Creative Cloud */}
                <Link to="/services/imacs-adobe">
                    <div className="service-box">
                        <p>iMacs with Adobe Creative Cloud</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Services;
