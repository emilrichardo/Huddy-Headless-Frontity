import React, {useState, useEffect} from 'react';
import { styled, connect, Global, css } from "frontity";
import Link from './list/Link';
import { CloseIcon, HamburgerIcon } from "./menu-icon";
import Menu from './Menu';






const Header = ({state, actions}) => {
    const data = state.source.get(state.router.link);
    const { isMobileMenuOpen } = state.theme;
    const show = isMobileMenuOpen ? 'show' : '';

    const  [scroll, setScroll] = useState(true);
    const controlNavbar = () =>{
        if(window.scrollY>100){
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
                   <Link link="/">
                       <Brand className={data.isHome ? "ishome" : null + scroll ? null : 'scroll'}> 
                        <svg color="var(--primary)"   viewBox="0 0 348 80" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M80.1939 67.1494H46.061V65.2165H50.0815V39.3485H40.4406V65.2165H44.7072V67.1494H10V65.2165H16.482V13.9329H10V12H44.7072V13.9329H40.4406V37.4978H50.0815V13.9329H46.061V12H80.1939V13.9329H73.6299V65.2165H80.1939V67.1494Z" fill="var(--primary)"/>
                            <path d="M142.463 13.9329C139.701 14.1248 137.568 15.5231 136.063 18.1277C134.559 20.7323 133.807 24.2691 133.807 28.7381V53.0844C133.807 57.7727 132.043 61.5974 128.515 64.5584C125.014 67.5195 119.831 69 112.966 69C108.071 69 103.749 68.4517 100.002 67.355C96.2828 66.2857 93.5615 64.86 91.8385 63.0779C90.1428 61.2684 89.0488 59.5411 88.5565 57.8961C88.0915 56.2511 87.859 53.6328 87.859 50.0411V13.9329H81.295V12H117.602V13.9329H111.818V58.0606C111.818 60.5556 111.995 62.2417 112.351 63.119C112.734 63.969 113.418 64.6133 114.402 65.0519C115.387 65.4906 116.508 65.71 117.766 65.71C120.775 65.71 123.838 64.6544 126.956 62.5433C130.074 60.4322 131.633 57.0325 131.633 52.3442V31.0822C131.633 25.4892 130.922 21.2395 129.499 18.3333C128.105 15.3997 125.452 13.9329 121.541 13.9329V12H142.463V13.9329Z" fill="var(--primary)"/>
                            <path d="M142.047 12H183.687C192.63 12 199.112 14.9336 203.133 20.8009C207.153 26.6681 209.164 32.7684 209.164 39.1017C209.164 45.8463 207.071 52.2071 202.887 58.184C198.73 64.1609 192.945 67.1494 185.533 67.1494H142.047V65.2165H148.405V13.9329H142.047V12ZM182.702 57.3615V21.7468C182.702 18.5115 182.402 16.4004 181.8 15.4134C181.198 14.4264 179.448 13.9329 176.549 13.9329H172.364V65.2165H175.728C178.436 65.2165 180.268 64.7092 181.226 63.6948C182.21 62.6804 182.702 60.5693 182.702 57.3615Z" fill="var(--primary)"/>
                            <path d="M210.634 12H252.274C261.218 12 267.7 14.9336 271.72 20.8009C275.741 26.6681 277.751 32.7684 277.751 39.1017C277.751 45.8463 275.659 52.2071 271.474 58.184C267.317 64.1609 261.532 67.1494 254.121 67.1494H210.634V65.2165H216.993V13.9329H210.634V12ZM251.29 57.3615V21.7468C251.29 18.5115 250.989 16.4004 250.387 15.4134C249.786 14.4264 248.035 13.9329 245.136 13.9329H240.951V65.2165H244.316C247.023 65.2165 248.856 64.7092 249.813 63.6948C250.797 62.6804 251.29 60.5693 251.29 57.3615Z" fill="var(--primary)"/>
                            <path d="M336 13.9329C335.015 14.3716 333.908 15.057 332.677 15.9892C331.474 16.8939 330.215 18.2237 328.903 19.9784C327.617 21.7056 326.045 24.2554 324.185 27.6277L317.252 40.0476V65.2165H324.677V67.1494H286.934V65.2165H293.58V45.6818L276.432 13.9329H272.903V12H309.293V13.9329H303.303L316.103 37.4978C320.424 29.7662 322.872 25.2424 323.446 23.9264C324.021 22.6104 324.308 21.2944 324.308 19.9784C324.308 19.0736 324.103 18.1414 323.692 17.1818C323.282 16.2222 322.653 15.4545 321.805 14.8788C320.957 14.2756 319.44 13.9603 317.252 13.9329V12H336V13.9329Z" fill="var(--primary)"/>
                            </svg>                   
                        </Brand> 
                    </Link> 
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
           {isMobileMenuOpen && <MenuModal className={show}><MenuOverlay onClick={actions.theme.toggleMobileMenu}></MenuOverlay><Menu /></MenuModal>}
           
                     
        </HeaderMain>
     );
}


const MenuOverlay= styled.div `
background-color:var(--dark);
position:fixed;
width:25vw;
height:100vh;
top:0;
left:0;
z-index:0;
opacity:0.2;
  
`;



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
  position: fixed;
  right: 24px;  
  background: var(--white);
  border: 0;
  border-radius:50px;
  z-index: 5;
  height: 40px;
  width: 40px;
  display: none;
  outline: none;
  box-shadow:0 0 5px 5px rgba(0,0,0,.1);
  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const HeaderMain= styled.header `   
    position: relative;
    z-index:100;
    

    &:not(.ishome){
        height:85px;
    }

    &.ishome{
        height:1px;
        &svg{
            width:50vw!important;
            max-width:none;
        }
    }

    

  

  
       
    }
`;


const HeaderContainer= styled.div `   
    
    width:100vw;
    top:0;  
    padding: 15px 0;
    transition-timing-function:ease-in;
    transition:0.3s;
  
`;


const Brand= styled.div `   
    & svg{
        width:250px;
        max-width:45vw;
        margin: 0 auto;
        transition-timing-function:ease-in;
        transition:0.1s;
        position:relative;
        top:0;
        left:0;
    }

    &.ishome{
        & svg{
            width:50vw;
           
            @media (min-width: 900px) {
                position:absolute;
                left: 25vw;
                top:30vh;
            }
        }
    }
`;









 
export default connect(Header);