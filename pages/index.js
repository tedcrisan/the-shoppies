import { useState, useEffect } from "react";
import styled from "styled-components";
import { MainLayout } from "../src/components/layout/MainLayout";
import { Search } from "../src/components/search";
import { Nominations } from "../src/components/nominations";
import { Banner } from "../src/components/Banner";
import fetchByID from "../src/utils/fetchByID";

export default function Home() {
  const [nominations, setNominations] = useState([]);
  const [isFull, setIsFull] = useState(false);
  const NOMINATIONS_LIMIT = 5;

  useEffect(() => {
    //Check for nominations in localstorage on mount
    if (window.localStorage.getItem("nominations")) {
      setNominations(Object.values(JSON.parse(window.localStorage.getItem("nominations"))));
    }
  }, []);

  useEffect(() => {
    nominations.length >= NOMINATIONS_LIMIT ? setIsFull(true) : setIsFull(false);
    window.localStorage.setItem("nominations", JSON.stringify({ ...nominations }));
  }, [nominations]);

  const addNomination = async (imdbID) => {
    if (!isFull) {
      const { movie, err } = await fetchByID(imdbID);
      if (err) return;
      setNominations((prev) => [...prev, movie]);
    }
  };

  const removeNomination = (id) => {
    setNominations((prev) => prev.filter(({ imdbID }) => imdbID !== id));
  };

  return (
    <MainLayout>
      {isFull && <Banner />}
      <Content>
        <Search {...{ nominations, addNomination, isFull }} />
        <Nominations {...{ nominations, removeNomination }} />
      </Content>
    </MainLayout>
  );
}

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  margin: 0 auto;
  padding: 2em;
  height: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: 45% 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 40% 1fr;
  }
`;
