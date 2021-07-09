import React from 'react';
import {connect, styled} from "frontity";
import Link from './list/Link';
import { RiWhatsappFill , RiFacebookCircleFill} from "react-icons/ri";
import {FacebookShareButton, WhatsappShareButton} from "react-share";

import FeaturedMedia from './FeaturedMedia';

const Post = ({state, element,libraries}) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id];
    const postUrl = state.urlSite + post.link;
    const author = state.source.author[post.author];   
    const categories = state.source.category[post.categories];
    const Html2React = libraries.html2react.Component;
   
 

  
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
                <h4 className="font-serif"><Link className="btn btn-tag" link={categories.link}>{categories.name}</Link></h4>
            }            
            <h2 className="fs-32 fs-md-48 mt-0" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
           

                 {post.acf.dedicado && <>❤ Dedicado a {post.acf.dedicado}</>}
                <MetaPost>
                    {post.acf.fecha 
                        ? <h4 className="datepost text-italic fs-18 mb-0">Año: {post.acf.fecha} </h4>
                        : <h6 className="datepost text-italic fs-16 mb-0">{post.date}</h6>   
                    } 
                    <SharesLinks> 
                        <small></small>
                        <FacebookShareButton className="btn-social"  url={" " + postUrl} title={'Los invito a leer mi última publicación titulada: ' + post.title.rendered + ''}><RiFacebookCircleFill/></FacebookShareButton>
                        <WhatsappShareButton className="btn-social"  url={" " + postUrl} title={'Los invito a leer mi última publicación titulada: ' + post.title.rendered + ' '}> <RiWhatsappFill/> </ WhatsappShareButton> 
                    </SharesLinks>  
                </MetaPost>
              
           <ContentPost className="fs-18 fs-md-20"> <Html2React html={post.content.rendered} /> </ContentPost>        
                   
        </Article>
    )
  }
  
}

export default connect(Post);

const SharesLinks = styled.div`
display:flex;
align-items:center;

`;

const MetaPost = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`;

const Article = styled.article `
margin-top: 10vh;
`;

const ContentPost = styled.div `

margin-top: 5vh;
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