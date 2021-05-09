import styled, { keyframes } from "styled-components";

export function Banner() {
  return (
    <Container>
      <Text>
        THE NOMINATIONS ARE IN <span>&#127881;</span>
      </Text>
    </Container>
  );
}

const slideDown = keyframes`
  100% {
    transform: translateY(7em);
    opacity: 1;
  }
`;

const Container = styled.div`
  position: fixed;
  top: -7em;
  left: 0;
  width: 100%;
  height: 7em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-color);
  opacity: 0;
  animation: ${slideDown} 1s forwards;
  z-index: 10;
`;

const Text = styled.h1`
  color: var(--primary-text-color);
`;
