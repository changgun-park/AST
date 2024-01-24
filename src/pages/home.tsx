import { View, Text, Button, ScrollView } from "react-native";
import GameItem from "../entities/game/ui/game-item";
import { mockGameList } from "./mock-game-list";
import { GameDetail } from "../entities/game";
import { Game } from "../entities/game/types";

export function Home({ navigation }: { navigation: any }) {
  return (
    <ScrollView>
      {mockGameList.map((game, index) => (
        <GameItem key={index} game={game} />
      ))}
    </ScrollView>
  );
}
