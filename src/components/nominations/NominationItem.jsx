import styled, { keyframes } from "styled-components";

export function NominationItem({
  Title,
  Poster,
  Genre,
  Year,
  imdbID,
  imdbRating,
  removeNomination,
}) {
  return (
    <Container>
      <Overlay> </Overlay>
      <Content>
        <Info>
          <MovieTitle>{Title}</MovieTitle>
          <Misc>
            <span>{Year}</span>
            <span>
              <img src="/star.svg" alt="Rating" width="16" height="16" /> {imdbRating}
            </span>
          </Misc>
          <Genres>{Genre}</Genres>
        </Info>
      </Content>
      <Image src={Poster} alt={imdbID} />
      <Remove onClick={() => removeNomination(imdbID)}>
        <img src="/delete.svg" alt="Remove Nomination" width="22" height="22" />
      </Remove>
    </Container>
  );
}

const slideDown = keyframes`
  100% {
    opacity: 1;
    transform: translateY(0.8em);
  }
`;

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.2);
  opacity: 0;
  color: var(--primary-text-color);
  background: black;
  transform: translateY(-0.8em);
  animation: ${slideDown} 1s ease-in-out forwards;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.6);
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  background: linear-gradient(to right, var(--primary-color) 78%, rgba(255, 0, 0, 0));
  z-index: 3;

  @media (max-width: 1024px) {
    background: linear-gradient(to right, var(--primary-color) 84%, rgba(255, 0, 0, 0));
  }
`;

const Image = styled.img`
  height: 14em;
  position: absolute;
  top: -2em;
  right: -0.1em;
  z-index: -2;
`;

const Info = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: column;
  padding: 0.8em 2em;
`;

const MovieTitle = styled.p`
  font-size: 1.4em;
  font-weight: 500;
  margin: 0;
`;

const Genres = styled.span`
  font-size: 0.8em;
  font-weight: 500;
  font-style: italic;
`;

const Misc = styled.div`
  display: flex;
  padding-bottom: 0.1em;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2em;
    margin-right: 1em;
  }
`;

const Remove = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  padding: 0.5em 0.5em 0.3em 0.3em;
  border: none;
  cursor: pointer;
  background: transparent;
  z-index: 4;

  svg {
    fill: white;
  }
`;
