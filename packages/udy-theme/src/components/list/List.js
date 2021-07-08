import React from 'react';
import {connect,decode,styled} from "frontity";
import ListItem from './ListItem';
import {CancionIcon,CartaIcon,PoesiaIcon } from '../IconSections';
import Pagination from './Pagination';
const ListHome = ({state}) => {
    const data = state.source.get(state.router.link); 
    

    return ( 
        <ArchiveLayout>
       
            {data.isHome && (
                <HeaderArchive> 
                    <h2 className="mb-0 fs-24 flex">Ultimas publicaciones</h2>               
                </HeaderArchive>
            )}

            {data.isTaxonomy && (
                <HeaderArchive>          
                        <h2 className="mb-0 fs-48 flex">
                            {decode(state.source[data.taxonomy][data.id].name)}                    
                            {decode(state.source[data.taxonomy][data.id].name) === "Canciones" ? <CancionIcon color="var(--primary)"/> : null}
                            {decode(state.source[data.taxonomy][data.id].name) === "Poesias" ? <PoesiaIcon  color="var(--primary)"/> : null}
                            {decode(state.source[data.taxonomy][data.id].name) === "Cartas" ? <CartaIcon  color="var(--primary)"/> : null}
                                        
                        </h2>             
                    </HeaderArchive>  
                    
                )}

            
                
                <h5>Posts: {data.items.length} </h5> 
                {data.items.map( ({id,type}) => {            
                    const item = state.source[type][id];             
                        return(                      
                            <ListItem key={item.id} item={item}/> 
                        )
                })}

                <Pagination/>
        </ArchiveLayout>
     );
}
 


const HeaderArchive= styled.div `    
  & svg{
     
      width:85px;
      height:auto;
      
  }
`;
const ArchiveLayout= styled.section `
    margin-top:55px;
  
`;




export default connect(ListHome);