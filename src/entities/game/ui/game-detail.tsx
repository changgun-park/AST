import { ImageBackground, View, Text, StyleSheet, Image } from "react-native";
import { Chip } from "react-native-paper";
import { Game } from "../types";
import dayjs from "dayjs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import "dayjs/locale/ko";
import advancedFormat from "dayjs/plugin/advancedFormat"; // For relative time calculation

dayjs.extend(advancedFormat);
dayjs.locale("ko");

export function GameDetail({ game }: { game: Game }) {
  const startTime = dayjs(game.startDate);
  const endTime = dayjs(game.endDate); // You would add this to your Game type
  const formattedDate =
    startTime.format("MM.DD dddd HH시") + "-" + endTime.format("HH시");

  return (
    <View>
      <View style={styles.header}>
        <ImageBackground
          style={styles.headerImgBackground}
          source={{ uri: game.court.imgUrl }}
        >
          <View style={styles.headerContent}>
            <View style={styles.gameTag}>
              <Text style={styles.gameTagText}>모집중</Text>
            </View>
            <Text style={styles.headerCourtName}>{game.title}</Text>
            <Text style={styles.headerTime}>{formattedDate}</Text>
          </View>
        </ImageBackground>
      </View>
      {/* main */}
      <View style={styles.main}>
        <View style={styles.detailItem}>
          <View style={styles.detailLabel}>
            <Icon name="account-group" size={30} color="#212121" />
            <Text style={styles.detailLabelText}>참여자</Text>
          </View>
          <View style={styles.detailItemContent}>
            <View style={styles.avatarList}>
              {game.participants.map((participant, index) => (
                <Image
                  key={index}
                  source={{ uri: participant.userProfileImgUrl }}
                  style={styles.avatar}
                />
              ))}
            </View>
          </View>
        </View>
        <View style={styles.detailItem}>
          <View style={styles.detailLabel}>
            <Icon name="tennis" size={30} color="#212121" />
            <Text style={styles.detailLabelText}>플레이 유형</Text>
          </View>
          <View style={styles.detailItemContent}>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 2,
              }}
            >
              혼복
            </Text>
          </View>
        </View>
        <View style={styles.detailItem}>
          <View style={styles.detailLabel}>
            <Icon name="map-marker" size={30} color="#212121" />
            <Text style={styles.detailLabelText}>위치</Text>
          </View>
          <View style={styles.detailItemContent}>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 2,
              }}
            >
              TS Tennis Zone
            </Text>
          </View>
        </View>

        <View></View>
      </View>

      {/* footer */}
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {},
  headerImgBackground: {
    height: 150,
  },
  headerContent: {
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.60)", // Semi-transparent overlay for better readability
    padding: 16,
    rowGap: 10,
    justifyContent: "center",
  },
  headerCourtName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
  },
  headerTime: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFF",
  },
  gameTag: {
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "rgba(39, 161, 245, 0.8)",
    padding: 4,
    width: 60,
    borderRadius: 4,
  },
  gameTagText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "500",
  },
  main: {
    padding: 16,
    rowGap: 20,
  },
  detailItem: {
    rowGap: 8,
  },
  detailLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  detailLabelText: {
    fontSize: 18,
    fontWeight: "600",
  },
  detailItemContent: {
    paddingLeft: 38,
  },
  avatarList: {
    flexDirection: "row",
    paddingBottom: 0,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd", // Light grey border
    marginRight: 8,
  },
});
