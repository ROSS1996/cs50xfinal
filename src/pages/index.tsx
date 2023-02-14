import { type NextPage } from "next";
import Layout from "../components/layout";
import usePlayers from "../hooks/usePlayers";
import useTeams from "../hooks/useTeams";
import Link from "next/link";

interface Player {
  nickname: string;
  playerId: number;
  playerLinkName: string;
  status: string;
}

const Teamlist: React.FC = () => {
  const teams = useTeams();
  const players = usePlayers();

  return (
    <div className="flex flex-col gap-2">
      {teams.map((team) => (
        <div
          key={team.id}
          className="grid-rows-[1fr, fit-content] grid grid-cols-[100px,1fr] rounded border border-black"
        >
          <div className="row-span-2 flex flex-col items-center justify-center gap-1 border-r border-black bg-green-900 p-4">
            <img src={team.logo} alt={team.name} className="h-14" />
            <span className="text-center font-bold text-white">
              {team.name}
            </span>
          </div>
          <div>
            <ul className="group flex flex-1 items-center rounded bg-green-100 px-4 [&>*:nth-last-child(n+2)]:border-r">
              {team.players.map((player: Player, playerIndex) => {
                const playerInfo = players.find(
                  (p) => p.id === player.playerId
                );
                const id = playerInfo?.id
                  ? playerInfo.id.toString()
                  : undefined;
                if (player.status === "Starter")
                  return (
                    <>
                      <li
                        key={playerIndex}
                        className={
                          "flex flex-1 flex-col items-center justify-center gap-1  border-black p-2 text-center font-bold"
                        }
                      >
                        {id && (
                          <Link href={`./player/${id}`}>
                            {playerInfo?.image && (
                              <img
                                src={playerInfo?.image}
                                className="h-auto w-20"
                              />
                            )}
                            <span>{playerInfo?.nickname}</span>
                          </Link>
                        )}
                      </li>
                    </>
                  );
              })}
            </ul>
            {team.bench.length < 1 && team.coach.name === "" ? (
              false
            ) : (
              <div className="border-t border-black px-1">
                {team.coach.name === "" ? (
                  false
                ) : (
                  <p className="font-bold">Coach: {team.coach.name}</p>
                )}
                {team.bench.length < 1 ? (
                  false
                ) : (
                  <p className="font-bold">
                    Reservas:{" "}
                    <span className="inline-flex flex-row gap-2">
                      {team.bench.map((player: Player, playerIndex) => (
                        <Link
                          href={`./player/${player.playerId}`}
                          key={player.playerId}
                          className="hover:underline"
                        >
                          {player.nickname}
                        </Link>
                      ))}
                    </span>
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <Layout title="Times">
      <section className="flex flex-col gap-4 p-2">
        <Teamlist />
      </section>
    </Layout>
  );
};

export default Home;
