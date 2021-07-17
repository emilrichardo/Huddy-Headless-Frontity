import { connect, styled } from "frontity";
import Link from "./Link";
import FeaturedMedia from "../FeaturedMedia";



const Item = ({ state, item, featured}) => {  
  const data = state.source.get(state.router.link)  
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  const {isDarkmodeOn} = state.theme;
  


  return (
    <Article>
      <Link link={item.link}>
        <Title className="fs-24 fs-md-30" dangerouslySetInnerHTML={{ __html: item.title.rendered }} ></Title>
      </Link>

     
      {state.theme.featured.showOnList && data.isHome && featured === "show" ?
        <Link link={item.link}><FeaturedMedia id={item.featured_media} /></Link> : null
     } 
     

      {item.acf.dedicado && <>❤ Dedicado a {item.acf.dedicado}</>}
      {state.theme.meta.showOnList &&
         ( <Meta>
          {item.acf.fecha 
          ? <>
            <PublishDate><b>Año: {item.acf.fecha }</b></PublishDate>
          </> 
          : <>
           <PublishDate><small>Publicado: {date.toDateString()}</small></PublishDate> 
           </>}
          </Meta>
          )      
      }  
       
      {item.excerpt && state.theme.excerpt.showOnList ? (
        <Excerpt className="fs-20" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      ) : null }
    </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);


const Article = styled.article`
 margin-top:34px;
 margin-bottom:34px;
 border-bottom:solid 1px var(--light100);
 position:relative;
`;

const Title = styled.h2`
margin-bottom:10px;
`;


const Meta = styled.div`
  margin-bottom:24px;
`;





const PublishDate = styled.span`
  
`;

const Excerpt = styled.div`

`;
