import React, {useState, useEffect} from 'react';
import { styled, connect, Global, css } from "frontity";

import Link from './Link';
import { CloseIcon, HamburgerIcon } from "./menu-icon";
import Menu from './Menu';
import { Logo } from './logo';





const Header = ({state, actions}) => {
    const data = state.source.get(state.router.link);
    const { isMobileMenuOpen } = state.theme;
    const show = isMobileMenuOpen ? 'show' : '';

    const  [scroll, setScroll] = useState(true);
    const controlNavbar = () =>{
        if(window.scrollY>200){
            setScroll(false)
        } else{
            setScroll(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',controlNavbar)
        return () => {
            winndow.removeEventListener('scroll',controlNavbar)
        }
    }, [])
    

    return ( 
        <HeaderMain  className={data.isHome ? "ishome" : null + scroll ? null : 'scroll'}>
           
           <HeaderContainer className="header-container">               
               <div className="container flex">               
                   <Link link="/"><Brand> <Logo color="var(--primary)"/> </Brand>  </Link> 
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
           </HeaderContainer>
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
            position:fixed;
            svg{                
            }
        }
    }

    &.scroll{
        & .header-container{
            background-color:var(--white);
            position:fixed;
            width:100vw;
            top:0;
            padding: 15px 0;
            transition-timing-function:ease-in;
            transition:0.3s;
            & svg{
                max-width:165px;
            }
        }
        
    }
`;


const HeaderContainer= styled.div `
   
  
`;


const Brand= styled.div `
   
    & img{
        max-width:45vw;
        margin: 0 auto;
        transition-timing-function:ease-in;
        transition:0.3s;
    }
`;









 
export default connect(Header);