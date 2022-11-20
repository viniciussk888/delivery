type FavoritesItemDataProps = {
  id: string;
  title: string;
  subtitle: string;
  favorite: boolean;
  badgeTitle: string;
};

type FavoritesListResponseData = {
  id: number;
  site_id: string;
  category: string;
  name: string;
  description: string;
  subject: string;
  url_media: string;
  url_cover_media: string;
  url_video: string;
  content: string;
  is_enabled: boolean;
  is_public: boolean;
  status: string;
};

type FavoritesListFilterParams = {
  name?: string;
  category?: string;
  subject_id?: string;
};

type FavoriteBadgeFilter = {
  badgeName: string;
  badgeValue: string;
};

type FavoriteMediaByIdResponseData = {
  id: number;
  user_id: number;
  media_id: number;
  is_favorite: boolean;
};

type FavoriteActionMediaByIdResponseData = {
  is_favorite: boolean;
};
