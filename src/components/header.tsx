import type { NextPage } from "next";
import { RiTeamFill, RiUserFill } from "react-icons/ri";
import Link from "next/link";

const Header: NextPage = () => {
  return (
    <header>
      <nav>
        <ul className="flex flex-row items-center gap-4 bg-green-800 p-2 font-bold text-white">
          <Link href={"/"}>
            <li className="flex flex-row items-center gap-1">
              <RiTeamFill />
              Times
            </li>
          </Link>
          <Link href={"/players"}>
            <li className="flex flex-row items-center gap-1">
              <RiUserFill />
              Jogadores
            </li>
          </Link>
        </ul>
      </nav>
      <section className="flex items-center justify-center border-y bg-green-700">
        <div className="flex items-center px-2 text-sm text-white">
          <span className="border-r px-2">
            Dados Retirados de{" "}
            <a
              href="https://hltv.org"
              target="_blank"
              rel="noreferer noreferrer"
              className="hover:underline"
            >
              HLTV.org
            </a>
          </span>
          <span className="px-2">
            Intervalo dos Dados: 01/08/2022 - 13/02/2023
          </span>
        </div>
      </section>
    </header>
  );
};

export default Header;
