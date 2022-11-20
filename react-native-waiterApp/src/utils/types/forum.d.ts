type ForumBadgeData = {
  title: string;
  id: string;
};

type ForumListDataProps = {
  title: string;
  check: boolean;
  liked: boolean;
  likes_counter: number;
  comments_counter: number;
  published_date: string;
  avatar_url: string;
  pinned: boolean;
  badges: ForumBadgeData[];
  author: string;
};

type ForumCommentDataProps = {
  id: string;
  avatar_url: string;
  author: string;
  published_at: string;
  liked: boolean;
  text: string;
  liked_counter: number;
  best_solution: boolean;
};

type ForumListResponseData = {
  id: number;
  title: string;
  user_type: string;
  user: string;
  user_id: number;
  avatar: string | null;
  description: string;
  fixed_topic: number;
  institution: string;
  head_office: string;
  subject_name: string;
  class_name: string;
  education_type: string;
  selective_year: null;
  tags: string[];
  start_date: null;
  end_date: null;
  is_resolved: number;
  type: string;
  total_comments: number;
  total_likes: number;
  updated_at: Date;
};

type ForumTopicByIdOptionsFieldData = {
  id: number;
  description: string;
  percentage: number;
  user_answer: number;
  total_answers: number;
};

type ForumTopicByIdCommentsFieldData = {
  id: number;
  user: string;
  avatar: null;
  comment: string;
  is_best_answer: number;
  is_liked: number;
  total_likes: number;
  created_at: Date;
};

type ForumTopicByIdResponseData = {
  id: number;
  title: string;
  description: string;
  fixed_topic: number;
  institution: string;
  head_office: string;
  subject_name: string;
  class_name: string;
  user: string;
  user_type: string;
  user_id: number;
  avatar: null;
  selective_year: number;
  tags: string[];
  start_date: Date;
  end_date: Date;
  total_likes: number;
  total_comments: number;
  is_resolved: number;
  is_liked: number;
  type: string;
  created_at: Date;
  options: ForumTopicByIdOptionsFieldData[];
  comments: ForumTopicByIdCommentsFieldData[];
  total_answers: number;
};

type ForumCreateTopicParam = {
  title: string;
  description: string;
  subject_id: number;
  education_type_id?: number;
  tags?: string[];
  type: string;
  start_date?: Date;
  end_date?: Date;
  options?: string[];
};
