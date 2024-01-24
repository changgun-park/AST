import { View, Text, Button, ScrollView } from "react-native";
import GameItem from "../entities/game/ui/game-item";
import { mockGameList } from "./mock-game-list";
import { CreateGameButton } from "../feature/create-game";

export function Home({ navigation }: { navigation: any }) {
  return (
    <View>
      <ScrollView>
        {mockGameList.map((game, index) => (
          <GameItem key={index} game={game} />
        ))}
      </ScrollView>
      <View
        style={{
          position: "absolute",
          width: "100%",
          bottom: 40,
          alignItems: "center",
        }}
      >
        <CreateGameButton />
      </View>
    </View>
  );
}
