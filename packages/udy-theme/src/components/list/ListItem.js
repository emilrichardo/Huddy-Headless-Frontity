import { connect, styled } from "frontity";
import Link from "./Link";



const Item = ({ state, item }) => {  
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  


  return (
    <Article>
      <Link link={item.link}>
        <Title className="fs-18 fs-md-30" dangerouslySetInnerHTML={{ __html: item.title.rendered }} ></Title>
      </Link>

      <div>
      {state.theme.meta.showOnList &&
         ( <Meta>
            {author && ( <AuthorName> Por <b>{author.name}</b></AuthorName>)}
            <PublishDate><b>{date.toDateString()}</b></PublishDate>
          </Meta>
          )      
      }
      </div>

      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
     

      {/* If the post has an excerpt (short summary text), we render it */}
      {item.excerpt && state.theme.excerpt.showOnList ? (
        <Excerpt className="fs-20" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      ) : <span></span> }
    </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);


const Article = styled.article`
 margin-top:34px;
 margin-bottom:34px;
 border-bottom:solid 1px var(--light100)
`;

const Title = styled.h2`
margin-bottom:10px;
`;


const Meta = styled.span`
  margin-bottom:24px;
`;

const AuthorName = styled.span`
 
`;



const PublishDate = styled.span`
  
`;

const Excerpt = styled.div`

`;
