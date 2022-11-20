type TaskStatusProps =
  | 'available'
  | 'delivered'
  | 'evaluated'
  | 'delayed'
  | 'expired';

type TaskItemDataProps = {
  id: number;
  name: string;
  deadline: Date;
  status: TaskStatusProps;
  subject: string;
};

type TaskListResponseData = {
  id: number;
  name: string;
  deadline: Date;
  status: TaskStatusProps;
  subject: string;
};

type TaskBadgeFilter = {
  badgeName: string;
  badgeValue: string;
};

type TaskListResponseCompletedData = {
  data: TaskListResponseData[];
  pagination: {
    rowsPerPage: number;
    page: number;
    rowsNumber: number;
  };
};

type TaskListStore = {
  taskList: TaskListResponseData[];
};

type TaskDetailsResponseData = {
  id: number;
  name: string;
  subject: string;
  instructions: string;
  status: TaskStatusProps;
  url_answer_file: string | null;
  deadline: Date;
  school_class: string;
  file_name: string;
};
