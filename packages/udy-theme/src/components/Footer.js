import React from 'react';
import {connect} from 'frontity'

const Footer = () => {
    return ( 
        <>
            <footer>
                <div className="container text-center">
                    <p className="font-sans">Copy right 2020 - Hudy Lescano</p>
                </div>
            </footer>
        </>
     );
}
 
export default connect(Footer);