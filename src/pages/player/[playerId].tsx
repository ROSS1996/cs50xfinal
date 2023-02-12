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
        <div className="grid grid-cols-[200px_1fr] rounded border border-black bg-green-50">
          <div className="flex max-w-fit border-r border-black">
            <img
              src={player?.image}
              alt=""
              className="h-auto w-56 self-center"
            />
          </div>
          <div className="flex flex-col items-start justify-start p-2">
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
      <section className="flex flex-col gap-3 p-2">
        <div className="rounded border border-black p-2">
          <p>
            <h1 className="px-1 text-lg font-bold">Médias</h1>
            <h2 className="border-b border-black font-bold">
              Mortes por round
            </h2>
            {player.dpr}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">KAST</h2>
            {player.kast}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">Impacto</h2>
            {player.impact}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">
              Dano médio por Round
            </h2>
            {player.adr}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">Kill por round</h2>
            {player.kpr}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">Taxa de HS</h2>
            {player.headshots}%
          </p>
          <p>
            <h2 className="border-b border-black font-bold">KD</h2>
            {player.kdratio}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">
              Assistências por round
            </h2>
            {player.assistsround}
          </p>
        </div>
        <div className="rounded border border-black p-2">
          <h1 className="px-1 text-lg font-bold">Estatísticas Gerais</h1>
          <p>
            <h2 className="border-b border-black font-bold">Mapas jogados</h2>
            {player.maps}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">Rounds jogados</h2>
            {player.rounds}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">Kills</h2>
            {player.kills}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">Mortes</h2>
            {player.deaths}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">
              Rounds com Kills
            </h2>
            {player.roundsWithKills}
          </p>
        </div>
        <div className="rounded border border-black p-2">
          <h1 className="px-1 text-lg font-bold">Estatísticas de Abertura</h1>
          <p>
            <h2 className="border-b border-black font-bold">Kills iniciais</h2>
            {player.totalOpeningKills}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">Mortes inciais</h2>
            {player.totalOpeningDeaths}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">
              Kills iniciais / mortes iniciais
            </h2>
            {player.openingKillRatio}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">Rating inicial</h2>
            {player.openingKillRating}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">
              % de ganho após kill inicial
            </h2>
            {player.teamWinPercentageAfterFirstKill}%
          </p>
          <p>
            <h2 className="border-b border-black font-bold">
              %Kills iniciais em rounds ganhos
            </h2>
            {player.firstKillInWonRounds}%
          </p>
        </div>
        <div className="rounded border border-black p-2">
          <h1 className="px-1 text-lg font-bold">Multikills</h1>
          <p>
            <h2 className="border-b border-black font-bold">Rounds sem kill</h2>
            {player.zeroKillRounds}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">
              Rounds com 1 kill
            </h2>
            {player.oneKillRounds}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">
              Rounds com 2 kills
            </h2>
            {player.twoKillRounds}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">
              Rounds com 3 kills
            </h2>
            {player.threeKillRounds}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">
              Rounds com 4 kills
            </h2>
            {player.fourKillRounds}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">
              Rounds com 5 kills
            </h2>
            {player.fiveKillRounds}
          </p>
        </div>
        <div className="rounded border border-black p-2">
          <h1 className="px-1 text-lg font-bold">Distribuição de Kills</h1>
          <p>
            <h2 className="border-b border-black font-bold">Kills com Rifle</h2>
            {player.rifleKills}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">
              Kills com Sniper
            </h2>
            {player.sniperKills}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">
              Kills com Submetralhadoras
            </h2>
            {player.smgKills}
          </p>
          <p>
            <h2 className="border-b border-black font-bold">
              Kills com Pistola
            </h2>
            {player.pistolKills}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default PlayerPage;
