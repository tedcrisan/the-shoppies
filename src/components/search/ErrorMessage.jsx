import styled, { keyframes } from "styled-components";

export function ErrorMessage() {
  return <Container>Movie Not Found</Container>;
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
  justify-content: center;
  font-size: 1.4em;
  font-weight: 500;
  padding: 1em;
  border-radius: 10px;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
  color: rgba(217, 44, 12, 255);
  background: rgba(250, 205, 205, 255);
  transform: translateY(-0.3em);
  animation: ${slideDown} 1.7s ease-in-out forwards;
`;
