import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import dayjs from "dayjs"; // Make sure to install dayjs
import "dayjs/locale/ko"; // Import the Korean locale
import advancedFormat from "dayjs/plugin/advancedFormat"; // For relative time calculation
import type { Game } from "../types";

dayjs.extend(advancedFormat);
dayjs.locale("ko");

const GameItem = ({ game }: { game: Game }) => {
  const spotsLeft = game.maxParticipants - game.participants.length;
  const canJoin = spotsLeft > 0;
  const startTime = dayjs(game.startTime);
  const endTime = dayjs(game.endTime); // You would add this to your Game type
  const formattedDate =
    startTime.format("MM.DD dddd HH시") + "-" + endTime.format("HH시");

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <ImageBackground
          source={{ uri: game.court.imgUrl }}
          style={styles.headerImage}
        >
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>{game.court.name}</Text>
            <Text style={styles.headerTime}>{formattedDate}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.participants}>
        {game.participants.map((participant, index) => (
          <Image
            key={index}
            source={{ uri: participant }}
            style={styles.avatar}
          />
        ))}
        {Array.from({ length: spotsLeft }, (_, index) => (
          <View key={index} style={styles.emptySpot} />
        ))}
      </View>

      <View style={styles.info}>
        <View style={styles.detailItem}>
          <Icon name="tennis" size={16} color="#212121" />
          <Text style={styles.detailText}>{game.type.join(", ")}</Text>
        </View>
        <View style={styles.detailItem}>
          <Icon name="account-group" size={16} color="#212121" />
          <Text style={styles.detailText}>{game.skillLevels.join(", ")}</Text>
        </View>
        <View style={styles.detailItem}>
          <Icon name="map-marker" size={16} color="#212121" />
          <Text style={styles.detailText}>{game.court.name}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {canJoin ? (
          <Button
            mode="outlined"
            color="#2196F3"
            onPress={() => {
              /* handle join game */
            }}
            style={styles.joinButton}
          >
            참여 요청
          </Button>
        ) : (
          <Button mode="contained" disabled style={styles.closedButton}>
            마감
          </Button>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 16, // More rounded corners
    marginVertical: 8,
    marginHorizontal: 16,
    paddingBottom: 12,
    elevation: 2, // Subtle elevation
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  header: {
    marginBottom: 6,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  headerImage: {
    width: "100%", // Set the width as needed
    height: 100, // Set the height as needed
    justifyContent: "flex-end", // Align content to the bottom of the image,
  },
  headerContent: {
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.50)", // Semi-transparent overlay for better readability
    padding: 16,
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF", // White color for the text
    marginBottom: 8, // Space between title and time
  },
  headerTime: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFF", // White color for the text
  },

  participants: {
    flexDirection: "row",
    marginBottom: 16,
    padding: 12,
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
  emptySpot: {
    width: 40, // Diameter of the empty slot
    height: 40, // Diameter of the empty slot
    borderRadius: 20, // Half the diameter to create a circle
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: "#FFEB3B", // A yellow color similar to the one in the picture
    backgroundColor: "#FFF9C4", // White background so the dots are visible
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    paddingHorizontal: 12,
    flexDirection: "column",
    rowGap: 8,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailText: {
    fontSize: 14,
    marginLeft: 8,
    color: "#212121",
  },
  buttonContainer: {
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  joinButton: {
    width: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2196F3", // Use app primary color for the border
    paddingVertical: 6,
    paddingHorizontal: 20,
    justifyContent: "center", // Center button text
    marginTop: 8,
  },
  closedButton: {
    width: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 6,
    paddingHorizontal: 20,
    justifyContent: "center", // Center button text
    marginTop: 8,
  },
});

export default GameItem;
