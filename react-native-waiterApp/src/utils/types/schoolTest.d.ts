type TestStatusProps = 'available' | 'done' | 'pending';

type SchoolTestsStatus =
  | 'available'
  | 'finished'
  | 'pending'
  | 'completed'
  | 'expired'
  | 'in_progress';

type TestItemDataProps = {
  id: number;
  attempts: number;
  name: string;
  status: SchoolTestsStatus;
  date: Date;
  subject_name: string;
  type: string;
  score: number;
  duration: string;
};

type SchoolTestsListResponseData = {
  attempts: number;
  date: Date;
  duration: string;
  id: number;
  name: string;
  score: number;
  status: SchoolTestsStatus;
  subject_name: string;
  total_score_last_attempt: number;
  type: string;
};

type SchoolTestsListResponseCompletedData = {
  data: SchoolTestsListResponseData[];
  pagination: {
    rowsPerPage: number;
    page: number;
    rowsNumber: number;
    total: number;
  };
};

type SchoolTestStartTestFieldProps = {
  id: number;
  name: string;
  number_attempts: number;
  head_office_id: number;
  institution_id: number;
  subject_id: number;
  subject_name: string;
  score: number;
  class_name: string;
  class_id: number;
  selective_year: number;
  instructions: string;
  type: string;
  duration: string;
  date: Date;
  time_start: string;
  time_end: string;
  created_at: Date;
  updated_at: Date;
  questions: SchoolTestStartQuestionsFieldProps[];
};

type SchoolTestStartQuestionsFieldProps = {
  id: number;
  test_id: number;
  statement: string;
  total_score: number;
  type: string;
  min_chars: number | null;
  created_at: Date;
  updated_at: Date;
  options: SchoolTestStartOptionsFieldProps[];
};

type SchoolTestStartOptionsFieldProps = {
  id: number;
  test_question_id: number;
  description: string;
  score: number;
  correct: number;
  created_at: Date;
  updated_at: Date;
};

type SchoolTestStartTestAttemptsFieldProps = {
  id: number;
  student_test_id: number;
  attempt_number: number;
  started_at: Date;
  finished_at: null;
  score: number | null;
  is_active: number;
  created_at: Date;
  updated_at: Date;
};

type SchoolTestStartByIdResponseData = {
  id: number;
  student_id: number;
  test_id: number;
  status: SchoolTestsStatus;
  test_attempts_count: number;
  created_at: Date;
  updated_at: Date;
  test: SchoolTestStartTestFieldProps;
  test_attempts: SchoolTestStartTestAttemptsFieldProps;
};

type SchoolTestStore = {
  activeTest: SchoolTestStartByIdResponseData;
};

type SchoolTestSubmitAnswersDiscursiveFieldProps = {
  answer: string;
  question_id: number;
};
type SchoolTestSubmitAnswersObjetiveFieldProps = {
  option_id: number;
  question_id: number;
};

type SchoolTestSubmitAnswersMixedFieldProps = {
  option_id?: number;
  answer?: string;
  question_id: number;
};

type SchoolTestSubmitData = {
  answers:
    | SchoolTestSubmitAnswersDiscursiveFieldProps[]
    | SchoolTestSubmitAnswersObjetiveFieldProps[]
    | SchoolTestSubmitAnswersMixedFieldProps[];
  student_test_id: number;
};
