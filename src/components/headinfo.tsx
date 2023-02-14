import type { NextPage } from "next";
import Head from "next/head";
interface Props {
  title: string;
  description: string;
}

const ComponentHead: NextPage<Props> = ({ title, description }) => (
  <Head>
    <title>{`${title} | Brasil CS`}</title>
    <meta name="description" content={description} />
    <link rel="icon" href="./favicon.ico" />
  </Head>
);

export default ComponentHead;
