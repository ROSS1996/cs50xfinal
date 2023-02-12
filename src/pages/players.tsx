import { type NextPage } from "next";
import Layout from "../components/layout";
import usePlayers from "../hooks/usePlayers";
import Link from "next/link";

const Home: NextPage = () => {
  const playersData = usePlayers();

  /*
  const players = playersData.sort((a, b) => {
    if (a.nickname.toUpperCase() < b.nickname.toUpperCase()) return -1;
    if (a.nickname.toUpperCase() > b.nickname.toUpperCase()) return 1;
    return 0;
  });
  */

  /*
  const players = playersData.sort((a, b) => {
    if (a.ratingtop5 !== b.ratingtop5) {
      return b.ratingtop5 - a.ratingtop5;
    }
    if (a.ratingtop10 !== b.ratingtop10) {
      return b.ratingtop10 - a.ratingtop10;
    }
    if (a.ratingtop20 !== b.ratingtop20) {
      return b.ratingtop20 - a.ratingtop20;
    }
    if (a.rating !== b.rating) {
      return b.rating - a.rating;
    }
    if (a.ratingtop30 !== b.ratingtop30) {
      return b.ratingtop30 - a.ratingtop30;
    }
    if (a.ratingtop50 !== b.ratingtop50) {
      return b.ratingtop50 - a.ratingtop50;
    }
    return b.rating - a.rating;
  });
  
  */

  const players = playersData.sort((a, b) => {
    const weightA =
      (a.ratingtop5 * 5 +
        a.ratingtop10 * 4 +
        a.ratingtop20 * 3 +
        a.ratingtop30 * 2 +
        a.ratingtop50 * 1 +
        a.rating * 0.5) /
      15;
    const weightB =
      (b.ratingtop5 * 5 +
        b.ratingtop10 * 4 +
        b.ratingtop20 * 3 +
        b.ratingtop30 * 2 +
        b.ratingtop50 * 1 +
        b.rating * 0.5) /
      15;
    return weightB - weightA;
  });

  return (
    <Layout title="Home">
      <section className="flex flex-col gap-4 p-2">
        <div className="flex flex-col gap-2">
          {players.map((player) => (
            <Link href={`/player/${player.id}`} key={player.id}>
              <div className="grid grid-cols-[100px,1fr] rounded border border-black">
                <div className="h-24 items-center justify-center rounded-l border-r border-black bg-green-100">
                  <img
                    src={player.image}
                    alt={player.nickname}
                    className="h-24"
                  />
                </div>
                <div className="rounded bg-green-50 px-2 py-1">
                  <h1 className="font-bold">{player.nickname}</h1>
                  <p>Time: {player.team}</p>
                  <p>Função: {player.function}</p>
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
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
