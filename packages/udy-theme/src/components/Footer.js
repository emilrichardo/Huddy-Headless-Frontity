import React from 'react';
import {connect,styled} from 'frontity'
import Link from './list/Link';
import { RiAdminLine} from "react-icons/ri";
const Footer = ({state}) => {

    const {urlAdmin} = state;
    return ( 
        <>
            <MainFooter>
                <div className="container text-center flex">
                    <p className="font-sans">Copy right 2020 - Hudy Lescano</p>
                    <a className="btn-social" target="blank" href="https://admin.huddy.ar/wp-admin"><RiAdminLine/></a>
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