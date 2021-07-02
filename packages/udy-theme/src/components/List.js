import React from 'react';
import { connect, decode, styled } from 'frontity';
import Link from './Link';

const List = ({state}) => {
    const data = state.source.get(state.router.link);
    
    return ( 
        <>
        
        <div className="flex">
            {data.isTaxonomy && (
                <h2>{decode(state.source[data.taxonomy][data.id].name)}</h2>                      
            )}
            <h6>Publicaciones {data.items.length} </h6> 
        </div>
        <hr></hr>
        

        {data.items.map( ({id,link,type}) => {
            
            const item = state.source[type][id];

                return(
                    <PostList key={id} className={type}>
                         
                        <Link  link={link}> <h2 className="fs-34 text-dark"  dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h2> </Link>
                        <h6 className="datepost text-italic fs-18">{item.date}</h6>   
                        <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div>                                                    
                    </PostList>
                   
                )
         })}
       
        
        </>
     );
}
 
export default connect(List);

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