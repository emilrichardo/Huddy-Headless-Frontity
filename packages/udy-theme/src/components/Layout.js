import React , {children} from 'react';
import {connect,styled} from 'frontity';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Base from '../styles/Base';
import Hero from './Hero';

const Layout = ({state,children}) => {
    const data = state.source.get(state.router.link)   
    return ( 
        <>
       
            <Base/>
            <Header/>
            
            {data.isHome && <Hero/>  }

            <Row>
                
                <div className="container">                              
                    {children} 
                </div> 

                {data.isHome || data.isError ? null : <Menu/>  }
            </Row>
           
               
            <Footer/>    
            
        </>
     );
}

const Row= styled.div `   
    & menu{
        display:none;
    }
    @media (min-width:800px){
        display:flex;
        flex-direction:row-reverse;
        justify-content:flex-end;

        & menu{
            display:block;
            order:1;
            margin-top:50px;
            & .container{
                padding-right:0;
            }
        }
    }

    .container{
        width:100%;
    }

   
`;


 
export default connect(Layout);
