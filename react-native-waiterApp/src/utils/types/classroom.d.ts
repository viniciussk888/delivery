type ClassroomDetailsResponseData = {
  name: string;
  teacher: string;
  contents: ClassroomDetailsContentData[];
};

type ClassroomDetailsContentData = {
  id: number;
  title: string;
  media_count: number;
  isComplete: false;
  medias: ClassroomDetailsContentMediasData[];
  video_time: number;
};

type ClassroomDetailsContentMediasData = {
  id: number;
  name: string;
  category: string;
  url_media: string | null;
};

type ClassroomDetailsFinishClassroomData = {
  course_id: number;
  course_content_id: number;
  completed: boolean;
};
