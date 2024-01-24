import type { User } from "../user/types";

export type Game = {
  id: string; // game id
  title: string;
  createdUsername: string; //
  createdAt: string; // Iso date string, 서버랑 포맷 맞추기
  startTime: string; // Iso date string, 서버랑 포맷 맞추기
  endTime: string;
  gameTypes: GameType[];
  gameSex: GameSex;
  court: {
    name: string;
    imgUrl: string;
  };
  skillLevels: GameSkillLevel[];
  participants: {
    username: string;
    userProfileImgUrl: string;
  }[];
  maxParticipants: number;
  description: string;
};

export type GameType = "Rally" | "Singles" | "Doubles";
export type GameSex = "Any" | "Male" | "Female";
export type GameSkillLevel = 1 | 2 | 3 | 4 | 5;
