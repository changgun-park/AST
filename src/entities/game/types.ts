export type Game = {
  startTime: string; // Iso date string, 서버랑 포맷 맞추기
  endTime: string;
  title: string;
  type: string[]; // ['랠리', '단식', '남복', '혼복', '혼복']
  court: {
    name: string;
    imgUrl: string;
  }; // 'ts tennis club'
  skillLevels: string[]; //['beginner', 'intermediate', 'advanced']
  participants: string[]; // ['user1', 'user2', 'user3']
  maxParticipants: number; // 4
};
