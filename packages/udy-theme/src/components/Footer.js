import React from 'react';
import {connect,styled} from 'frontity'

const Footer = () => {
    return ( 
        <>
            <MainFooter>
                <div className="container text-center">
                    <p className="font-sans">Copy right 2020 - Hudy Lescano</p>
                </div>
            </MainFooter>
        </>
     );
}

const MainFooter= styled.div `   
    padding:5vh 0;
    margin-top:5vh;
    border-top: solid 1px var(--light100);
  
`;
 
export default connect(Footer);