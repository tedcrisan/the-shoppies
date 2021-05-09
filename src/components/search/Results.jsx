import styled from "styled-components";

export function Results({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8em;
`;
