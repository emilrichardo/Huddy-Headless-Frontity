import React from 'react';
import Link from './Link';
import {connect, styled} from "frontity";

const Sidebar = ({state}) => {
    return ( 

        <>
            <Menu>  
                <div className="container">
                    {state.theme.menu.map(([name, link]) => {
                    // Check if the link matched the current page url
                    const isCurrentPage = state.router.link === link;
                    return (
                        <li key={name}>                       
                            <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
                                {name}{isCurrentPage ? "page" : undefined}
                            </Link>
                        </li>
                    );
                    })}
                </div>                       
            </Menu>            
        </>
        
     );
}
 
export default connect(Sidebar);

const Menu= styled.menu `
    margin-bottom:54px;
    padding:0;
   & li{
       display:block;
       font-family:var(--serif);
       font-size: 24px;
       font-style: italic;
        font-weight: 700;
        margin: 24px 0;

       & a{
           color:var(--dark) ; 
           
           &[aria-current="page"] {
            color:var(--white) ; 
            background-color:var(--primary);
            font-weight: 500;
          }
       }


   }
    
`;