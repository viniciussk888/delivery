type MessageListDataProps = {
  contact_name: string;
  message_preview: string;
  unread_messages: number;
  contact_id?: number;
  conversation_id?: number;
};

type MessageItem = {
  attachment_url: string | null;
  conversation_id: number;
  created_at: string;
  id: number;
  message: string;
  receiver_id: number;
  seen: boolean;
  sender_id: number;
};
