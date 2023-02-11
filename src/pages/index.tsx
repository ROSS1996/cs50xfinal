import { type NextPage } from "next";
import Layout from "../components/layout";
import usePlayers from "../hooks/usePlayers";
import useTeams from "../hooks/useTeams";
import Link from "next/link";

const Teamlist: React.FC = () => {
  const teams = useTeams();
  const players = usePlayers();

  return (
    <div className="flex flex-col gap-2">
      {teams.map((team) => (
        <div
          key={team.id}
          className="grid grid-cols-[100px,1fr] grid-rows-1 rounded border border-black"
        >
          <div className="flex flex-col items-center justify-center gap-1 border-r border-black bg-green-900 p-4">
            <img src={team.logo} alt={team.name} className="h-14" />
            <span className="text-center font-bold text-white">
              {team.name}
            </span>
          </div>
          <ul className="flex flex-1 items-center rounded bg-green-100 px-4">
            {team.players.map((player, playerIndex) => {
              const playerInfo = players.find((p) => p.name === player);
              const id = playerInfo?.id ? playerInfo.id.toString() : undefined;
              return (
                <>
                  <li
                    key={playerIndex}
                    className={
                      playerIndex < team.players.length - 1
                        ? "flex flex-1 flex-col items-center justify-center gap-1 border-r border-black p-2 text-center font-bold"
                        : "flex flex-1 flex-col items-center gap-1 p-2 text-center font-bold"
                    }
                  >
                    {id && (
                      <Link href={`./player/${id}`}>
                        <img
                          src={playerInfo?.picture}
                          className="h-auto w-20"
                        />
                        <span>{playerInfo?.name}</span>
                      </Link>
                    )}
                  </li>
                </>
              );
            })}
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
