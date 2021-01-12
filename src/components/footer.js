//General imports
import React from 'react';

//Local imports
import '../styles/footer.css'

const Footer = () => {
    return (
        <div>
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ad91ff" fillOpacity="1" d="M0,224L34.3,202.7C68.6,181,137,139,206,117.3C274.3,96,343,96,411,112C480,128,549,160,617,149.3C685.7,139,754,85,823,80C891.4,75,960,117,1029,154.7C1097.1,192,1166,224,1234,229.3C1302.9,235,1371,213,1406,202.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            {/* <p className="footer-content" id="h4">Leaf <span id="p">Copyright © 2020 Leaf & Toadless</span></p> */}
            {/* <div className="footer">
                <p className="footer-content" id="h4">Leaf <span id="p">Copyright © 2020 Leaf & Toadless</span></p>
            </div> */}
        </div>
    )
}

//Exports
export default Footer;