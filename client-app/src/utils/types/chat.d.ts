type ChatListResponseData = {
  id: number;
  full_name: string;
  type: string;
};

type ChatPreviewResponseData = {
  ccid: number;
  created_at: string;
  newMessages: number;
  person1_id: number;
  person1_name: string;
  person2_id: number;
  person2_name: string;
  updated_at: string;
};
