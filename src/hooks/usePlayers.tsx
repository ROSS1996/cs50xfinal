import players from "../../public/data/players.json";
import { useState, useEffect } from "react";

interface Player {
  id: number;
  name: string;
  picture: string;
  team: string;
  function: string;
}

const usePlayers = () => {
  const [playersState, setPlayersState] = useState<Player[]>([]);

  useEffect(() => {
    setPlayersState(players.players);
  }, []);

  return playersState;
};

export default usePlayers;
