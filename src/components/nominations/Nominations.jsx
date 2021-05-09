import { useState, useEffect } from "react";
import styled from "styled-components";
import { NominationItem } from "./NominationItem";

export function Nominations({ nominations, removeNomination }) {
  const [empty, setEmpty] = useState(nominations?.length === 0 || false);

  useEffect(() => {
    setEmpty(nominations?.length === 0 || false);
  }, [nominations]);

  return (
    <Container>
      <Progress>Nominations {nominations.length}/5</Progress>
      <Chosen>
        {nominations.map((movie) => (
          <NominationItem key={movie.imdbID} {...movie} removeNomination={removeNomination} />
        ))}
      </Chosen>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1em;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const Progress = styled.span`
  width: 90%;
  text-align: right;
  font-size: 1.6em;
  font-weight: 500;
  padding-top: 0.2em;
  color: var(--secondary-text-color);
`;

const Chosen = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
