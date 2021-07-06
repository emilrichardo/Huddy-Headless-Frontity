import React from 'react';
import { connect, styled, css } from 'frontity';
import Menu from './Menu';
import imageSm from '../assets/hero-sm.jpg';
import imageLg from '../assets/hero.jpg';



const Hero = () => {    
    return ( 
        <HeroHome>
            <Menu/> 
           <div className="container">
                 
               <h4 className="fs-16 hero-caption text-italic"> <strong>¡Bienvenidos a mi blog! </strong> <br></br> 
               Quiero compartirles en este lugar mis poesías, canciones, historias, cartas y muchos textos más.

               </h4>
           </div>
           
                
           
        </HeroHome>
        
     );
}
 
export default connect(Hero);



const HeroHome = styled.section `
    position:relative;
    padding-top: 150px;
    background-color:#E2E2E2;
    width:100vw;
    height:100vh; 
    overflow:hidden;    
    top:-95px; 
   

    & .hero-caption, & menu{
        position:relative;
        z-index:1;
        
    }

    & .hero-caption {
        position: absolute;
        bottom:10vh;
        max-width:40vw;        

    }
    &:before{
        content:"";        
        background-image: ${" url('" + imageSm + "')"};
        background-repeat:no-repeat;         
        background-size: auto 120vh;        
        background-position-x:15vw ;
        background-position-y:bottom ;
        width:100vw;
        height:100vh;  
        position: absolute;
        top:0;
        right: 0;
        
        bottom:0;
         
        
        z-index:0;
        
    }

    @media (min-width:800px){
        &:before{
            background-image: ${" url('" + imageLg + "')"};
            background-position-x:right  ;
        }
        
    }
    
`;