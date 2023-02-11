import { useRouter } from "next/router";
import usePlayers from "../../hooks/usePlayers";
import Layout from "../../components/layout";

const PlayerPage = () => {
  const router = useRouter();
  const { playerId } = router.query;

  const players = usePlayers();

  const player = players.find((p) => Number(p.id) === Number(playerId));

  if (!player) {
    return (
      <Layout title="Home">
        <h1 className="flex h-[calc(100vh-40px)] items-center justify-center text-center text-5xl font-bold">
          JOGADOR NÃO ENCONTRADO
        </h1>
      </Layout>
    );
  }

  return (
    <Layout title="Home">
      <section className="grid gap-2 p-2">
        <div className="grid min-w-min max-w-fit grid-cols-2 border border-black bg-green-50">
          <div className="border-r border-black">
            <img src={player?.picture} alt="" className="h-auto w-56" />
          </div>
          <div className="p-2">
            <h1 className="font-bold">{player?.name}</h1>
            <p>{player?.team}</p>
            <p>Função: {player?.function}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlayerPage;
