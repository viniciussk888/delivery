type StudentLiveData = {
  starts_at: string;
  title: string;
  description: string;
  teacher: string;
  url: string;
};
type StudentLiveCalendarListResponseData = {
  day: string;
  currentLivesInDay: StudentLiveData[];
};

type FetchStudentLiveListProps = {
  dateStart: string;
  dateEnd: string;
  name?: string;
};
