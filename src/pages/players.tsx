import { type NextPage } from "next";
import Layout from "../components/layout";
import usePlayers from "../hooks/usePlayers";

const Home: NextPage = () => {
  const playersData = usePlayers();

  const players = playersData.sort((a, b) => {
    if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
    if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
    return 0;
  });

  return (
    <Layout title="Home">
      <section className="flex flex-col gap-4 p-2">
        <div className="flex flex-col gap-2">
          {players.map((player) => (
            <div
              key={player.id}
              className="grid grid-cols-[100px,1fr] rounded border border-black"
            >
              <div className="h-24 items-center justify-center border-r border-black bg-green-100">
                <img src={player.picture} alt={player.name} className="h-24" />
              </div>
              <div className="bg-green-50 px-2 py-1">
                <h1 className="font-bold">{player.name}</h1>
                <p>Time: {player.team}</p>
                <p>Função: {player.function}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
