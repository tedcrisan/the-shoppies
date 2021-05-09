import Head from "next/head";
import styled from "styled-components";
import { Header } from "../Header";

export function MainLayout({ children }) {
  return (
    <Container>
      <Head>
        <title>The Shoppies</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/Logo.ico" />
      </Head>
      <Header />
      {children}
    </Container>
  );
}

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;
