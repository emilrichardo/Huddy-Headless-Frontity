import React from 'react';
import { styled, connect, Global, css } from "frontity";
import Logo from '../assets/logo.svg';
import Link from './Link';
import { CloseIcon, HamburgerIcon } from "./menu-icon";
import Menu from './Menu';





const Header = ({state, actions}) => {
    const data = state.source.get(state.router.link);
    const { isMobileMenuOpen } = state.theme;
    const show = isMobileMenuOpen ? 'show' : '';
    

    return ( 
        <HeaderMain  className={data.isHome ? "ishome" : null}>
           <div className="container">               
               <div className="flex">
               
                   <Link link="/"><Brand><img src={Logo} alt="Udy" /></Brand>  </Link> 
                   <MenuToggle onClick={actions.theme.toggleMobileMenu}>
                        {isMobileMenuOpen ? (
                        <>
                            {/* Add some style to the body when menu is open,
                            to prevent body scroll */}
                            <Global styles={{ body: { overflowY: "hidden" } }} />
                            <CloseIcon color="var(--primary)" size="20px" />
                        </>
                        ) : (
                        <HamburgerIcon color="var(--dark)" size="24px" />
                        )}
                    </MenuToggle>
                    {/* If the menu is open, render the menu modal */}
                           
                    
                  
               </div> 
                               
           </div>
           {isMobileMenuOpen && <MenuModal className={show}><Menu /></MenuModal>}
           
                     
        </HeaderMain>
     );
}

const MenuModal= styled.div `
   
   position:fixed;
   top:0;  
    right: -500px ;
   width:75vw;
   height:100vh;
   background:var(--dark100);  
   padding-top:15vh;
   transition: all 2.5s ease;
   & a{
       color:var(--light)
   }

   &.show{
    right: -1px ;
    transition: all 0.5s ease;
   }
  
`;



const MenuToggle = styled.button`
  position: absolute;
  right: 24px;  
  background: var(--white);
  border: 0;
  border-radius:50px;
  z-index: 5;
  height: 40px;
  width: 40px;
  display: none;
  outline: none;

  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const HeaderMain= styled.header `   
    position: relative;
    z-index:100;
    padding: 25px 0;  

    &.ishome{
       
        @media (min-width:900px){
            img{
                
            }
        }
    }
`;

const Brand= styled.div `
   
    & img{
        max-width:35vw;
        margin: 0 auto;
    }
`;









 
export default connect(Header);