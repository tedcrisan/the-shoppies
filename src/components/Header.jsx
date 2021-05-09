import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export function Header() {
  return (
    <Container>
      <Link href="/" passHref>
        <Logo>
          <Image src="/Logo.png" alt="Shoppies Logo" width="80" height="80" />
          <Text>
            <span>THE</span>
            <span>SHOPPIES</span>
          </Text>
        </Logo>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  height: 8em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    font-size: 0.7em;
    font-weight: 500;
  }

  span:last-child {
    font-size: 1.5em;
    font-weight: 700;
    line-height: 0.6;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  color: var(--primary-color);
  font-size: 2em;
  text-decoration: none;
  cursor: pointer;
`;
