import type { NextPage } from "next";
import ComponentHead from "./headinfo";
import Header from "./header";
import Footer from "./footer";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ title, children }) => (
  <div className="font-oxanium">
    <ComponentHead title={title} />
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
