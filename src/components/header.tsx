import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <header>
      <nav>
        <ul className="flex flex-row gap-4 bg-green-800 text-white items-center p-2 font-bold">
            <li>Jogadores</li>
            <li>Times</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;