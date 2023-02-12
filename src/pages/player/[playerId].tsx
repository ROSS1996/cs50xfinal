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
            <img src={player?.image} alt="" className="h-auto w-56" />
          </div>
          <div className="p-2">
            <h1 className="font-bold">{player?.nickname}</h1>
            <p>{player?.name}</p>
            <p>Time: {player?.team}</p>
            <p>Função: {player?.function}</p>
          </div>
          <div className="col-span-2 flex flex-row items-center gap-2 border-t border-black">
            <p className="flex flex-col items-center justify-center border-r border-black px-2 text-center">
              <h2 className="font-bold">Rating Geral</h2>
              <span>{player?.rating}</span>
            </p>
            <p className="flex flex-col items-center justify-center border-r border-black px-2 text-center">
              <h2 className="font-bold">Rating vs top 5</h2>
              <span>{player?.ratingtop5}</span>
            </p>
            <p className="flex flex-col items-center justify-center border-r border-black px-2 text-center">
              <h2 className="font-bold">Rating vs top 10</h2>
              <span>{player?.ratingtop10}</span>
            </p>
            <p className="flex flex-col items-center justify-center border-r border-black px-2 text-center">
              <h2 className="font-bold">Rating vs top 20</h2>
              <span>{player?.ratingtop20}</span>
            </p>
            <p className="flex flex-col items-center justify-center border-r border-black px-2 text-center">
              <h2 className="font-bold">Rating vs top 30</h2>
              <span>{player?.ratingtop30}</span>
            </p>
            <p className="flex flex-col items-center justify-center text-center">
              <h2>
                <h2 className="font-bold">Rating vs top 50</h2>
                <span>{player?.ratingtop50}</span>
              </h2>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlayerPage;
