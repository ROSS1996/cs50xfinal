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
      <h1>{player?.name}</h1>
    </Layout>
  );
};

export default PlayerPage;
