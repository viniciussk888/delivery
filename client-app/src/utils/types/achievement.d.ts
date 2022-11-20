type AchievementListDataProps = {
  points: number;
  description: string;
  finished: boolean;
  progress_status: number;
  image_url: string;
  finished_date: string;
  title: string;
};

type AchievementFieldDataProps = {
  id: number;
  name: string;
  description: string;
  points: number;
  image: string;
};

type AchievementFieldPointsDataProps = {
  level: number;
  division: string;
  total_points: number;
};

type AchievementListResponseData = {
  id: number;
  progress: number;
  achieved: boolean;
  points_amount: number;
  user: {
    id: number;
    name: string;
  };
  conquest: AchievementFieldDataProps;
  points: AchievementFieldPointsDataProps[];
  conquest_date: Date;
};

type AchievementPointsObject = {
  level: number;
  division: string;
  totalPoints: number;
};
