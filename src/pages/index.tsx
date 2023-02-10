import { type NextPage } from "next";
import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import teams from "../../public/data/teams.json";

interface Team {
  name: string;
  players: string[];
}

const Teamlist: React.FC = () => {
  const [teamsState, setTeamsState] = useState<Team[]>([]);

  useEffect(() => {
    setTeamsState(teams.teams);
  }, []);

  return (
    <div>
      {teamsState.map((team, index) => (
        <div
          key={index}
          className="grid grid-cols-[100px,1fr] grid-rows-1 gap-2 border"
        >
          <h1 className="h-full bg-gray-400 p-4 text-center font-bold">
            {team.name}
          </h1>
          <ul className="grid grid-cols-5 items-center p-4">
            {team.players.map((player, playerIndex) => (
              <li key={playerIndex} className="font-bold">
                {player}
              </li>
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
