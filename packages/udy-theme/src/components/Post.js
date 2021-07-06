import React from 'react';
import {connect, styled, decode} from "frontity"

import Link from './Link';

const Post = ({state, element}) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const author = state.source.author[post.author];   
    const categories = state.source.category[post.categories];

  
  if(data.isPage && "ispage") {
      return(
         <Article>
             <h2 className="fs-32 fs-md-48" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
             <div className="fs-18 " dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>     
         </Article> 
          
      )
  }   else{
    return(
        <Article>
            {categories &&
                <h4 className="font-serif"><Link link={categories.link}>{categories.name}</Link></h4>
            }            
            <h2 className="fs-32 fs-md-48" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>  
            <h6 className="datepost text-italic fs-16">{post.date} - {author.name} </h6>                 
            <div className="fs-18 " dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>         
        </Article>
    )
  }

   
   
}
 
export default connect(Post);

const Article = styled.article `
    margin-top: 10vh;
    & img{
        width: 100%!important;
        height: auto;
    }

    & .datepost{
        
    }

    & h1, h2, h3, h4{
        margin-top:1em;
    }


    figure{
        padding:0;
        margin:0;
        
        max-width: 100%;
        & img{
            
            height: auto;
        }

        & figcaption {
            font-size: 14px;
        }
    }

    blockquote{
        border-left: solid 2px var(--primary);
        margin-left:0;
        padding-left:1em;
        &:before{
            content:" ";
        }
    }

    
`;