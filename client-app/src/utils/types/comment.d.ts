type CommentsListResponseData = {
  id: number;
  comment: string;
  date: string;
  isLike: boolean;
  likes: number;
  user_name: string;
  user_type: string;
};

type CommentsLikeResponseData = {
  status: 'like' | 'unlike';
};
