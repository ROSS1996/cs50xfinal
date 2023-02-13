import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer className="flex items-center justify-center bg-green-800 text-sm text-white">
      <p>
        Desenvolvido por{" "}
        <a
          href="https://github.com/ROSS1996/"
          target="_blank"
          rel="noreferer noreferrer"
          className="underline underline-offset-2"
        >
          Robson Santana
        </a>
      </p>
    </footer>
  );
};

export default Footer;
