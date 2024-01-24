export type Game = {
  id: string;
  createdUsername: string;
  createdAt: string;
  title: string;
  types: GameType[]; // 서버는 string..?
  sex: GameSex;
  skillLevels: GameSkillLevel[]; // 서버는 string...?
  status: GameStatus;
  maxNumberPlayers: number;
  court: {
    name: string;
    number: string;
    imgUrl: string;
  };
  startDate: string;
  endDate: string;
  memo: string;
  players: {
    name: string;
    profileImgUrl: string;
  }[];
};

export type GameType = "Rally" | "Singles" | "Doubles";
export type GameSex = "Any" | "Male" | "Female";
export type GameSkillLevel = 1 | 2 | 3 | 4 | 5;
export type GameStatus = "OPEN" | "MATCHED" | "FINISHED";
