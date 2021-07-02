import React from 'react';
import {connect, styled} from "frontity"

const Post = ({state, element}) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]

    return(
        <Article>
            <h2 className="fs-32 fs-md-48" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>  
            <h6 className="datepost text-italic fs-16">{post.date}</h6>     
            <h3 className="text-italic fs-24" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></h3>   
            <div className="fs-18 " dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>         
        </Article>
    )
   
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
        &:before{
            content:"&quot;";
        }
    }

    
`;