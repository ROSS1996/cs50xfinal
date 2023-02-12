import teams from "../../public/data/teams.json";
import { useState, useEffect } from "react";

interface Player {
  nickname: string;
  playerId: number;
  playerLinkName: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
  ranking: number;
  coach: string;
  players: Player[];
}
const useTeams = () => {
  const [teamsState, setTeamsState] = useState<Team[]>([]);
  useEffect(() => {
    setTeamsState(teams.teams);
  }, []);

  return teamsState;
};

export default useTeams;
