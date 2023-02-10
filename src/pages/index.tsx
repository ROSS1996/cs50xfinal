import { type NextPage } from "next";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import teams from "../../public/data/teams.json";

interface Team {
  name: string;
  logo: string;
  players: string[];
}

const Teamlist: React.FC = () => {
  const [teamsState, setTeamsState] = useState<Team[]>([]);

  useEffect(() => {
    setTeamsState(teams.teams);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {teamsState.map((team, index) => (
        <div
          key={index}
          className="grid grid-cols-[100px,1fr] grid-rows-1 rounded border border-black"
        >
          <div className="flex items-center justify-center border-r border-black bg-green-900 p-4">
            <img src={team.logo} alt={team.name} className="h-14" />
          </div>
          <ul className="grid grid-cols-5 items-center rounded bg-green-100 p-4">
            {team.players.map((player, playerIndex) => (
              <>
                <li
                  key={playerIndex}
                  className={
                    playerIndex < team.players.length - 1
                      ? "border-r border-black p-2 text-center font-bold"
                      : "p-2 text-center font-bold"
                  }
                >
                  {player}
                </li>
              </>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <section className="flex flex-col gap-4 p-2">
        <Teamlist />
      </section>
    </Layout>
  );
};

export default Home;
