type NoteItemDataProps = {
  id: number;
  name: string;
  grades: NoteCenterGradeFieldProps[];
  total_score: number;
  average_score: number;
};

type Note = {
  label: string;
  value: number;
};

type SubjectNoteDetail = {
  title: string;
  notes: Note[];
};

type NoteCenterGradeFieldProps = {
  grade_id: number;
  type: string;
  name: string;
  score: number;
};

type NoteCenterListResponseData = {
  id: number;
  name: string;
  grades: NoteCenterGradeFieldProps[];
  total_score: number;
  average_score: number;
};
