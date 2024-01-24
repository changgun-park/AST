export type Game = {
  id: string;
  createdUsername: string;
  createdAt: string;
  title: string;
  types: GameType[]; // 서버는 string..?
  sex: GameSex;
  skillLevels: number[]; // 서버는 string...?
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

export type GameType = "랠리" | "단식" | "복식";
export type GameSex = "무관" | "남자" | "여자";
export type GameStatus = "모집중" | "마감" | "완료";
