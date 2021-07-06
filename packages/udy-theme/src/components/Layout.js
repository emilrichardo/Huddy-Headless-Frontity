import React , {children} from 'react';
import {connect} from 'frontity';
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
            <nav>
                
            </nav> 
            <div className="container">
                              
                {children} 
            </div> 

            {data.isHome || data.isError ? null : <Menu/>  }
               
            <Footer/>    
            
        </>
     );
}
 
export default connect(Layout);