import type { NextPage } from "next";
import { RiTeamFill, RiUserFill } from "react-icons/ri";
import Link from "next/link";

const Header: NextPage = () => {
  return (
    <header>
      <nav>
        <ul className="flex flex-row items-center gap-4 bg-green-800 p-2 font-bold text-white">
          <Link href={"./"}>
            <li className="flex flex-row items-center gap-1">
              <RiTeamFill />
              Times
            </li>
          </Link>
          <Link href={"./players"}>
            <li className="flex flex-row items-center gap-1">
              <RiUserFill />
              Jogadores
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
