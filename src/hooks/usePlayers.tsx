import players from "../../public/data/players.json";
import { useState, useEffect } from "react";

interface Player {
  id: number;
  image: string;
  nickname: string;
  name: string;
  team: string;
  team_id: number;
  rating: number;
  dpr: number;
  kast: number;
  impact: number;
  adr: number;
  kpr: number;
  headshots: number;
  kdratio: number;
  assistsround: number;
  deathsround: number;
  maps: number;
  ratingtop5: number;
  ratingtop10: number;
  ratingtop20: number;
  ratingtop30: number;
  ratingtop50: number;
  function: string;
  kills: number;
  deaths: number;
  killDeath: number;
  killRound: number;
  roundsWithKills: number;
  totalOpeningKills: number;
  totalOpeningDeaths: number;
  openingKillRatio: number;
  openingKillRating: number;
  teamWinPercentageAfterFirstKill: number;
  firstKillInWonRounds: number;
  zeroKillRounds: number;
  oneKillRounds: number;
  twoKillRounds: number;
  threeKillRounds: number;
  fourKillRounds: number;
  fiveKillRounds: number;
  rifleKills: number;
  sniperKills: number;
  smgKills: number;
  pistolKills: number;
}

const usePlayers = () => {
  const [playersState, setPlayersState] = useState<Player[]>([]);

  useEffect(() => {
    setPlayersState(players.players);
  }, []);

  return playersState;
};

export default usePlayers;
