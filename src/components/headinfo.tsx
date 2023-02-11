import type { NextPage } from "next";
import Head from "next/head";
interface Props {
  title: string;
}

const ComponentHead: NextPage<Props> = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content="Generated by create-t3-app" />
    <link rel="icon" href="./favicon.ico" />
  </Head>
);

export default ComponentHead;
