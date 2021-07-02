import React , {children} from 'react';
import {connect} from 'frontity';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Base from '../styles/Base';
import Link from './Link';
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

            {data.isHome || data.isError ? null : <Sidebar/>  }
               
            <Footer/>    
            
        </>
     );
}
 
export default connect(Layout);