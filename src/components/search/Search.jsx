import { useState, useEffect } from "react";
import styled from "styled-components";
import { SearchBar } from "./SearchBar";
import { Results } from "./Results";
import { ResultRow } from "./ResultRow";
import { ErrorMessage } from "./ErrorMessage";
import useFetchBySearch from "../../utils/useFetchBySearch";

export function Search({ nominations, addNomination, isFull }) {
  const { query, search, data, error } = useFetchBySearch();
  const [nominationIDs, setNominationIDs] = useState(nominations.map((movie) => movie.imdbID));
  const [showResults, setShowResults] = useState(false);
  const RESULTS_SHOWN = 5;
  console.log("ERROR", error);

  useEffect(() => {
    if (error) return;
    if (data.length > 0) setShowResults(true);
  }, [data]);

  useEffect(() => {
    setNominationIDs(nominations.map((movie) => movie.imdbID));
  }, [nominations]);

  useEffect(() => {}, [query]);

  const add = (id) => {
    addNomination(id);
    setShowResults(false);
    search("");
  };

  return (
    <Container>
      <Title>STUNNING.</Title>
      <Title>EXHILARATING.</Title>
      <Title>SPECTACULAR.</Title>
      <SubTitle>Search for and nominate your top 5 movie masterpieces</SubTitle>
      <SearchBar {...{ query, search, isFull }} />
      {query.length > 0 && <QueryText>Results for "{query}"</QueryText>}
      {error && query.length !== 0 && <ErrorMessage />}
      {!error && showResults && (
        <Results>
          {data.slice(0, RESULTS_SHOWN).map((movie) => (
            <ResultRow key={movie.imdbID} {...movie} {...{ add, nominationIDs, setShowResults }} />
          ))}
        </Results>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    align-items: center;
    width: 90%;
    margin: 0 auto;
  }

  h1:nth-of-type(2) {
    color: var(--primary-color);
  }
`;

const Title = styled.h1`
  width: 80%;
  font-size: 3.2em;
  line-height: 1.2em;
  margin: 0;
  color: var(--secondary-text-color);

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const SubTitle = styled.h3`
  color: rgba(112, 112, 112, 255);
`;

const QueryText = styled.span`
  font-size: 1.2em;
  font-weight: 500;
  padding: 1em 0;
`;
