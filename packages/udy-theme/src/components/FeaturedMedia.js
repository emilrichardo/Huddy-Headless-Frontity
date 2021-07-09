import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const FeaturedMedia = ({ state, id }) => {
  const media = state.source.attachment[id];

  if (!media) return null;

 

  return (
    <Container>
      <StyledImage
        alt={media.title.rendered}
        src={media.source_url}        
      />
    </Container>
  );
};

export default connect(FeaturedMedia);

const Container = styled.div`
  margin-top: 5px;
  margin-bottom:5px;
  height: 400px;
`;

const StyledImage = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
