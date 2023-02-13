import teams from "../../public/data/teams.json";
import { useState, useEffect } from "react";

interface Coach {
  name: string;
  image: string;
}

interface Player {
  nickname: string;
  playerId: number;
  playerLinkName: string;
  status: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
  ranking: number;
  coach: Coach;
  players: Player[];
  bench: Player[];
}
const useTeams = () => {
  const [teamsState, setTeamsState] = useState<Team[]>([]);
  useEffect(() => {
    setTeamsState(teams.teams);
  }, []);

  return teamsState;
};

export default useTeams;
