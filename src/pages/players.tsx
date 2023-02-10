import { type NextPage } from "next";
import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import players from "../../public/data/players.json";

interface Player {
  name: string;
  team: string;
  function: string;
}

const PlayerList: React.FC = () => {
  const [playersState, setPlayersState] = useState<Player[]>([]);

  useEffect(() => {
    setPlayersState(players.players);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {playersState.map((player, index) => (
        <div
          key={index}
          className="grid grid-cols-[100px,1fr] rounded border border-black"
        >
          <div className="h-24 items-center justify-center border-r border-black">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png"
              className="h-24"
            />
          </div>
          <div className="px-2 py-1">
            <h1 className="font-bold">{player.name}</h1>
            <p>Time: {player.team}</p>
            <p>Função: {player.function}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <section className="flex flex-col gap-4 p-2">
        <PlayerList />
      </section>
    </Layout>
  );
};

export default Home;
