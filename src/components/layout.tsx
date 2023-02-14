import type { NextPage } from "next";
import ComponentHead from "./headinfo";
import Header from "./header";
import Footer from "./footer";

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ title, description, children }) => (
  <div className="font-oxanium">
    <ComponentHead title={title} description={description} />
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
