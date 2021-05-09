import styled from "styled-components";

export function SearchBar({ query, search, isFull }) {
  const handleInput = (e) => search(e.target.value);

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search by movie title"
        value={query}
        disabled={isFull}
        onChange={handleInput}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.2em;
  margin: 0 auto;
  padding: 0.8em 1em;
  border: none;
  border-radius: 10px;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
`;
