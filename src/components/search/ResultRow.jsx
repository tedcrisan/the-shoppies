import styled, { keyframes } from "styled-components";

export function ResultRow({ Title, Year, imdbID, add, nominationIDs, setShowResults }) {
  const alreadyNominated = nominationIDs.includes(imdbID);

  return (
    <Container>
      <Text>
        <MovieTitle>{Title}</MovieTitle>
        <MovieYear>{Year}</MovieYear>
      </Text>

      <NominateButton
        alreadyNominated={alreadyNominated}
        disabled={alreadyNominated}
        onClick={() => add(imdbID)}
      >
        {alreadyNominated ? "Nominated" : "Nominate"}
      </NominateButton>
    </Container>
  );
}

const slideDown = keyframes`
  0% {
    opacity: 0;
  }

  70% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    transform: translateY(0.3em);
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.3em;
  background: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
  transform: translateY(-0.3em);
  animation: ${slideDown} 1.7s ease-in-out forwards;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieTitle = styled.span`
  font-size: 1.3em;
  font-weight: 500;
`;

const MovieYear = styled.span`
  font-size: 0.9em;
`;

const NominateButton = styled.button`
  font-size: 1em;
  font-weight: 700;
  padding: 0.6em 1.2em;
  color: ${({ alreadyNominated }) =>
    alreadyNominated ? "var(--primary-color)" : "var(--primary-text-color)"};
  background: ${({ alreadyNominated }) =>
    alreadyNominated ? "var(--primary-text-color)" : "var(--primary-color)"};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
