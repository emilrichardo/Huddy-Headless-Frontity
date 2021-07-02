import React from 'react';
import {connect, styled, css} from 'frontity';
import Logo from '../assets/logo.svg';
import Link from './Link';



const Header = (state) => {
    
    return ( 
        <HeaderMain>
           <div className="container">               
               <div className="flex">
                   <Link link="/" ><Brand><img src={Logo} alt="Udy" /></Brand></Link> 
                    <MenuButton /> 
               </div>                 
           </div>
           
                            
        </HeaderMain>
     );
}


const light = '#EAE7E4';
const dark= '#333333';

const HeaderMain= styled.header `   
    position: relative;
    z-index:100;
    padding: 25px 0;  
`;

const Brand= styled.div `
   
    & img{
        max-width:174px;
        margin: 0 auto;
    }
`;

const MenuButton= styled.button `
    background-color:var(--white);
    
    border:none; 
    outline:none;
    box-shadow:none;
    padding: 10px 12px;
    border-radius:5px;
    &:before, &:after{
        content:"";
        display:block;
        width:30px;
        margin:5px auto;
        height: 3px;
        background-color:var(--dark)
    }
`;
 
export default connect(Header);