import teams from "../../public/data/teams.json";
import { useState, useEffect } from "react";

interface Team {
  name: string;
  logo: string;
  players: string[];
}
const useTeams = () => {
  const [teamsState, setTeamsState] = useState<Team[]>([]);
  useEffect(() => {
    setTeamsState(teams.teams);
  }, []);

  return teamsState;
};

export default useTeams;
