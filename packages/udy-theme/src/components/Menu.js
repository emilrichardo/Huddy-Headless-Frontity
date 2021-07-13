import React from 'react';
import Link from './list/Link';
import {connect, styled} from "frontity";

const Menu = ({state,libraries}) => {
    

    const data = state.source.get(state.router.link)
    const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
   
   
   
    return ( 

        <>
            <MainMenu>  
                <div className="container">
                 

                    {items.map((item) => {                         
                        
                    const link = libraries.source.normalize(item.url);
                    const isCurrentPage = state.router.link === link;      
                    if (!item.child_items) {
                    return (                        
                        <NavItem key={item.ID}> 
                        
                            <Link link={item.url}  aria-current={isCurrentPage ? "page" : undefined} >{item.title}</Link>                           
                        </NavItem>
                    );
                    } else {
                    const childItems = item.child_items;
                    return (
                        <NavItemWithChild key={item.ID}>  
                            <NavItem >
                                <Link link={item.url} aria-current={isCurrentPage ? "page" : undefined} >{item.title}</Link>
                            </NavItem>
                        <ChildMenu>
                            {childItems.map((childItem) => {
                            return (
                                <NavItem key={childItem.ID}>
                                <Link link={childItem.url}>{childItem.title}</Link>
                                </NavItem>
                            );
                            })}
                        </ChildMenu>
                        </NavItemWithChild>
                    );
                    }
                })}  



                </div>  

                                    
            </MainMenu>            
        </>
        
     );
}
 
export default connect(Menu);

const MainMenu= styled.menu `
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


const NavContainer = styled.nav`

`;

const NavItem = styled.div`
display:block;
font-family:var(--serif);
font-size: 24px;
font-style: italic;
 font-weight: 700;
 margin: 24px 0;
 & a{
    color:var(--primary) ; 
    
    &[aria-current="page"] {
     color:var(--white) ; 
     background-color:var(--primary);
     font-weight: 500;
   }
}
`;
/**
 * Styling of nav elements
 */
const NavItemWithChild = styled.div`

`;
const ChildMenu = styled.div`
padding-left:15px;
`;