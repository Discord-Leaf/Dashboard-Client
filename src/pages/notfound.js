//General imports
import React from 'react';

//Local imports
import '../styles/notfound.css'
import Footer from '../components/footer.js';

const NotFound = () => {
    return (
        <div>
            <div className="dv">
                <h1 className="ltitle h1">404</h1>
                <p className="ptitle p">This page is not found!</p>
            </div>
            <Footer />
        </div>
    )
}

//Exports
export default NotFound;