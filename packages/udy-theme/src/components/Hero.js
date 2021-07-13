import React from 'react';
import { connect, styled, css } from 'frontity';
import Menu from './Menu';
import imageSm from '../assets/hero-sm.jpg';
import imageLg from '../assets/hero.jpg';


const Hero = ({state}) => {  
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id];
   
    return ( 
        <HeroHome>
            <Menu/> 
           <div className="container">
           
              <div className="hero-caption">
                  
              <h4 className="fs-16 fs-md-24 font-sans  mb-0"> <strong>¡Bienvenidos a mi blog! </strong></h4>
               <p className="fs-18 fs-md-20">Quiero compartirles en este lugar mis poesías, canciones, historias, cartas y muchos textos más.</p>
              </div>   
              
           </div>  
                  
                
           
        </HeroHome>
        
     );
}
 
export default connect(Hero);


const SharesLinks = styled.div`
display:flex;
align-items:center;

`;
const HeroHome = styled.section `
    position:relative;
    padding-top: 150px;
    background-color:#E2E2E2;
    width:100vw;
    height:100vh; 
    overflow:hidden;    
    top:0;
   

    & .hero-caption, & menu{
        position:relative;
        z-index:1;
        
    }

    & .hero-caption {
       position:relative;
       z-index:1;
       color:var(--dark);
       
        
        @media (min-width:800px){
            max-width:40vw;  
            margin-top:10vh; 
        }     

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
            background-position-x:50vw  ;
            background-size: auto 160vh; 
            background-position-y:top;
        }
        
    }
    
`;