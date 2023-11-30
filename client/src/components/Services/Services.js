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
                        <h3>3D printing</h3>
                    </div>
                </Link>
                {/* Sewing */}
                <Link to="/services/sewing">
                    <div className="service-box">
                        <h3>Sewing</h3>
                    </div>
                </Link>
                {/* Audio Booth */}
                <Link to="/services/audio-booth">
                    <div className="service-box">
                        <h3>Audio Booth</h3>
                    </div>
                </Link>
                {/* Button Making */}
                <Link to="/services/button-making">
                    <div className="service-box">
                        <h3>Button Making</h3>
                    </div>
                </Link>
                {/* Sticker Printing */}
                <Link to="/services/sticker-printing">
                    <div className="service-box">
                        <h3>Sticker Printing</h3>
                    </div>
                </Link>
                {/* iMacs with Adobe Creative Cloud */}
                <Link to="/services/imacs-adobe">
                    <div className="service-box">
                        <h3>iMacs with Adobe Creative Cloud</h3>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Services;
