type NotificationsListDataProps = {
  message: string;
  date: Date;
  read: boolean;
};

type NotificationListDataProps = {
  id: number;
  notify_id: number;
  notify_type: string;
  message: string;
  date: Date;
  read: boolean;
};

type NotificationListResponseCompletedData = {
  data: NotificationListDataProps[];
  pagination: {
    rowsPerPage: number;
    page: number;
    rowsNumber: number;
  };
  notification_not_read: number;
};

type NotificationListNotSentResponseData = {
  data: NotificationListDataProps[];
  notification_not_read: number;
};
