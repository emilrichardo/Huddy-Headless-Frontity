import React from 'react';
import { connect, decode, styled } from 'frontity';
import Link from './Link';
import {CancionIcon,CartaIcon,PoesiaIcon } from '../components/IconSections'

const List = ({state}) => {
    const data = state.source.get(state.router.link);
    const category = decode(state.source[data.taxonomy][data.id].name);
 
    
    return ( 
        <ArchiveLayout>

           
            
           
            
            
            


                  
            <h1 className="mb-0 fs-48 flex">
            {category}
                <HeaderArchive>
                {category === "Canciones" ? <CancionIcon color="var(--primary)"/> : null}
                {category === "Poesias" ? <PoesiaIcon  color="var(--primary)"/> : null}
                {category === "Cartas" ? <CartaIcon  color="var(--primary)"/> : null}
                </HeaderArchive>                
            </h1> 
            <h6>Publicaciones {data.items.length} </h6> 
        
        
        

        {data.items.map( ({id,link,type}) => {
            
            const item = state.source[type][id];

                return(
                    <PostList key={id} className={type} > 
                        <h6 className="datepost text-italic fs-18">{item.date}</h6>                           
                        <Link  link={link}> <h2 className="fs-24 fs-md-32"  dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h2> </Link>                     
                                                                          
                    </PostList>                   
                )
         })}
       
        
        </ArchiveLayout>
     );
}
 
export default connect(List);
const HeaderArchive= styled.div `    
  & svg{
     
      width:55px;
      height:auto;
      
  }
`;
const ArchiveLayout= styled.section `
    margin-top:55px;
  
`;

const PostList= styled.article `
    margin-bottom:55px;
    margin-top:54px;
    
    & h6{
        margin-bottom:5px;
        margin-top:5px;
    }
    & h2{
        margin-bottom:0;
    }
    & p{
        margin-top:5px;
    }
`;